# Feature Specifications

## Common Features

### Authentication & Authorization

- Email + password registration with email verification
- JWT access tokens (15 min) and httpOnly refresh tokens (7 days)
- Role-based access control: `buyer`, `seller`, `admin`
- Password reset via emailed one-time link
- Account suspension by admin
- "Remember me" extends refresh token to 30 days

### User Dashboard

- Summary cards: active listings, pending bookings, unread messages
- Recent activity feed
- AI-recommended matches ("For You" section)
- Quick create listing button (contextual to last used pillar)
- CO₂ offset and cost savings metrics

### Notifications

- In-app notification bell with unread count badge
- Types: new match, booking request, booking confirmation, new review, system announcement
- Mark individual or all as read
- Email digest (daily or instant, user-configurable)
- Notification preferences page

### Global Search

- Unified search bar across all pillars
- Auto-complete suggestions from listing titles
- Filters: pillar, category, location, price range, date
- Search results grouped by pillar with counts
- Save search query for alerts

### AI Matching Engine

- TF-IDF vectorization of listing title, description, tags
- Cosine similarity scoring against active listings
- Top-10 matches returned and cached in Redis (TTL 10 min)
- Match freshness indicator (score + "last calculated" timestamp)
- User can dismiss irrelevant matches

---

## Pillar 1: Waste-to-Resource Exchange

### Listing Creation (Seller)

- Required: title, description, material category, quantity, unit, price, location
- Optional: up to 6 images, material grade, hazard classification, certifications
- Category taxonomy: metals, plastics, chemicals, wood, textiles, paper/cardboard, electronics, glass, rubber, organic
- Draft mode — save without publishing
- Duplicate listing shortcut

### Listing Discovery (Buyer)

- Browse by category, location, price range
- Sort by: newest, price (asc/desc), relevance (AI score)
- Listing detail page: full description, images carousel, seller info, map pin (city-level)
- "Request Quote" action (creates inquiry transaction)
- Save to watchlist

### Transaction Flow

1. Buyer clicks "Request Quote" and submits inquiry
2. Seller receives notification and can accept/counter/decline
3. On acceptance, transaction status becomes `confirmed`
4. Buyer marks as `completed` after receiving material
5. Both parties prompted to leave a review

### Seller Tools

- Edit/delete listings
- Mark as reserved or sold
- View buyer inquiry history
- Listing performance stats (views, inquiries, conversion rate)

---

## Pillar 2: Machine Sharing Economy

### Listing Creation (Owner)

- Required: title, description, machine category, daily rate, weekly rate, location
- Optional: images, specifications (key-value pairs), operating manual PDF, certifications
- Availability calendar: owner blocks unavailable dates

### Booking Flow (Renter)

1. Browse available machines; check availability calendar
2. Select date range → see total cost
3. Submit booking request
4. Owner approves or declines within 48 hours
5. Booking confirmed → transaction record created
6. Renter picks up / receives machine
7. Owner marks return date; transaction completed
8. Both parties leave review

### Owner Tools

- Availability calendar management
- Booking request inbox (accept / decline with reason)
- Revenue summary per machine
- Maintenance log notes field per listing

---

## Pillar 3: Shared Workforce Economy

### Listing Creation (Provider)

- Required: title, skill category, hourly rate, availability window, location
- Optional: headcount available, individual skill tags (multi-select), certifications, portfolio links
- Provider can represent individual workers or a staffing company

### Booking Flow (Requester)

1. Browse by skill category, location, availability
2. View provider profile and reviews
3. Submit work request: dates, estimated hours, job description
4. Provider accepts/declines
5. Work completed → requester confirms hours
6. Payment record created; both parties review

### Provider Tools

- Toggle active/inactive status
- View and manage work requests
- Track earnings history

---

## Pillar 4: Shared Industrial Space Economy

### Listing Creation (Owner)

- Required: title, space type, area (m²), daily rate, monthly rate, location
- Optional: images, amenities checklist, floor plan PDF, access rules
- Space types: warehouse, cold storage, laboratory, office/co-working, outdoor yard

### Booking Flow (Tenant)

1. Browse by type, location, size, price
2. View availability calendar
3. Submit booking: start date, end date, intended use description
4. Owner approves/declines within 48 hours
5. Booking confirmed → access instructions sent via notification
6. At end of lease, owner marks space as available again
7. Both parties leave review

### Owner Tools

- Availability calendar management
- Tenant booking history
- Revenue summary
- Space utilization analytics

---

## Admin Panel

- User management: list, view, verify, suspend/reinstate
- Listing moderation: flag, hide, delete inappropriate listings
- Transaction overview: filter by status, date, pillar
- Platform metrics: total users, active listings per pillar, transaction volume
- Announcement broadcast to all users
- Review moderation (remove abusive reviews)
