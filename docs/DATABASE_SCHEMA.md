# Database Schema

MongoDB 7.0 — all collections use `_id` (ObjectId) as the primary key.

---

## Collection: `users`

Stores registered business accounts.

```js
{
  _id: ObjectId,
  name: String,          // full name of contact person
  email: String,         // unique, indexed
  passwordHash: String,  // bcrypt hash
  company: String,
  role: String,          // enum: "buyer" | "seller" | "admin"
  avatar: String,        // URL, nullable
  isVerified: Boolean,   // default false
  isActive: Boolean,     // default true
  refreshTokenHash: String, // nullable; hash of latest refresh token
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `{ email: 1 }` — unique
- `{ role: 1 }`
- `{ createdAt: -1 }`

---

## Collection: `wasteitems`

Listings for waste-to-resource exchange.

```js
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,      // e.g. "metals", "plastics", "chemicals"
  quantity: Number,
  unit: String,          // e.g. "kg", "tonnes", "litres"
  price: Number,         // asking price in USD
  location: String,
  images: [String],      // array of CDN/storage URLs
  sellerId: ObjectId,    // ref: users
  status: String,        // enum: "available" | "reserved" | "sold"
  tags: [String],
  embeddingVector: [Number], // TF-IDF/ML embedding for similarity search
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `{ sellerId: 1 }`
- `{ category: 1, status: 1 }`
- `{ location: 1 }`
- `{ status: 1, createdAt: -1 }`
- `{ title: "text", description: "text", tags: "text" }` — full-text

---

## Collection: `machineryitems`

Listings for machinery sharing/rental.

```js
{
  _id: ObjectId,
  title: String,
  description: String,
  category: String,       // e.g. "CNC", "forklift", "compressor"
  dailyRate: Number,
  weeklyRate: Number,
  location: String,
  images: [String],
  ownerId: ObjectId,      // ref: users
  availability: Boolean,
  specifications: {        // flexible key-value pairs
    power: String,
    weight: String,
    dimensions: String,
    // ...
  },
  bookedDates: [{
    startDate: Date,
    endDate: Date,
    bookerId: ObjectId   // ref: users
  }],
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `{ ownerId: 1 }`
- `{ category: 1, availability: 1 }`
- `{ location: 1 }`
- `{ title: "text", description: "text" }` — full-text

---

## Collection: `laborlistings`

Listings for shared workforce.

```js
{
  _id: ObjectId,
  title: String,
  description: String,
  skillCategory: String,  // e.g. "welding", "electrical", "logistics"
  hourlyRate: Number,
  availability: String,   // e.g. "weekdays", "weekends", "full-time"
  location: String,
  providerId: ObjectId,   // ref: users
  skills: [String],       // e.g. ["MIG", "TIG", "SMAW"]
  headcount: Number,      // number of workers available
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `{ providerId: 1 }`
- `{ skillCategory: 1, isActive: 1 }`
- `{ location: 1 }`
- `{ skills: 1 }`
- `{ title: "text", description: "text", skills: "text" }` — full-text

---

## Collection: `workspacelistings`

Listings for industrial/office space sharing.

```js
{
  _id: ObjectId,
  title: String,
  description: String,
  type: String,           // enum: "warehouse" | "office" | "lab" | "cold-storage"
  area: Number,           // square metres
  dailyRate: Number,
  monthlyRate: Number,
  location: String,
  images: [String],
  amenities: [String],    // e.g. ["electricity", "loading-dock", "WiFi"]
  ownerId: ObjectId,      // ref: users
  availability: Boolean,
  bookedPeriods: [{
    startDate: Date,
    endDate: Date,
    tenantId: ObjectId    // ref: users
  }],
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `{ ownerId: 1 }`
- `{ type: 1, availability: 1 }`
- `{ location: 1 }`
- `{ title: "text", description: "text" }` — full-text

---

## Collection: `transactions`

Records of completed exchanges/bookings.

```js
{
  _id: ObjectId,
  type: String,           // enum: "waste" | "machinery" | "labor" | "workspace"
  listingId: ObjectId,    // ref: respective listing collection
  buyerId: ObjectId,      // ref: users
  sellerId: ObjectId,     // ref: users
  amount: Number,
  currency: String,       // default "USD"
  status: String,         // enum: "pending" | "confirmed" | "completed" | "cancelled"
  startDate: Date,        // for time-based transactions
  endDate: Date,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

**Indexes:**
- `{ buyerId: 1, createdAt: -1 }`
- `{ sellerId: 1, createdAt: -1 }`
- `{ listingId: 1 }`
- `{ status: 1 }`

---

## Collection: `reviews`

User reviews for transactions.

```js
{
  _id: ObjectId,
  reviewerId: ObjectId,   // ref: users
  revieweeId: ObjectId,   // ref: users
  transactionId: ObjectId, // ref: transactions
  targetId: ObjectId,     // ref: listing
  targetType: String,     // enum: "waste" | "machinery" | "labor" | "workspace"
  rating: Number,         // 1–5
  comment: String,
  createdAt: Date
}
```

**Indexes:**
- `{ revieweeId: 1 }`
- `{ targetId: 1, targetType: 1 }`
- `{ transactionId: 1 }` — unique (one review per transaction)

---

## Collection: `notifications`

In-app notifications.

```js
{
  _id: ObjectId,
  userId: ObjectId,       // ref: users
  type: String,           // enum: "match" | "booking" | "message" | "review" | "system"
  message: String,
  relatedId: ObjectId,    // nullable — ref to the related resource
  relatedType: String,    // nullable
  read: Boolean,          // default false
  createdAt: Date,        // TTL index: auto-delete after 90 days
}
```

**Indexes:**
- `{ userId: 1, read: 1, createdAt: -1 }`
- `{ createdAt: 1 }` — TTL, `expireAfterSeconds: 7776000` (90 days)

---

## Relationships Summary

```
users ──< wasteitems (sellerId)
users ──< machineryitems (ownerId)
users ──< laborlistings (providerId)
users ──< workspacelistings (ownerId)
users ──< transactions (buyerId, sellerId)
users ──< reviews (reviewerId, revieweeId)
users ──< notifications (userId)
transactions ──< reviews (transactionId)
```

---

## Migration Strategy

- Use [migrate-mongo](https://github.com/seppevs/migrate-mongo) for schema migrations
- All migrations stored in `backend/src/migrations/`
- Run on startup in non-production environments; manually in production
