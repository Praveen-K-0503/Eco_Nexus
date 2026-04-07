# API Specification

Base URL: `https://api.econexus.com/api` (production) / `http://localhost:5000/api` (development)

All responses are JSON. Authenticated endpoints require `Authorization: Bearer <token>`.

---

## Authentication

### POST /auth/register

Register a new business account.

**Request**
```json
{
  "name": "Jane Doe",
  "email": "jane@acme.com",
  "password": "SecurePass123!",
  "company": "ACME Corp",
  "role": "seller"
}
```

**Response 201**
```json
{
  "success": true,
  "data": {
    "user": { "id": "u_01", "name": "Jane Doe", "email": "jane@acme.com", "company": "ACME Corp", "role": "seller" },
    "accessToken": "<jwt>",
    "refreshToken": "<jwt>"
  }
}
```

**Errors:** `400` validation error · `409` email already registered

---

### POST /auth/login

**Request**
```json
{ "email": "jane@acme.com", "password": "SecurePass123!" }
```

**Response 200**
```json
{
  "success": true,
  "data": {
    "user": { "id": "u_01", "name": "Jane Doe", "role": "seller" },
    "accessToken": "<jwt>",
    "refreshToken": "<jwt>"
  }
}
```

**Errors:** `401` invalid credentials · `403` account suspended

---

### POST /auth/refresh

Exchange a refresh token for a new access token.

**Request**
```json
{ "refreshToken": "<jwt>" }
```

**Response 200**
```json
{ "success": true, "data": { "accessToken": "<new-jwt>" } }
```

**Errors:** `401` invalid or expired refresh token

---

### POST /auth/logout

Revokes the refresh token. Requires `Authorization` header.

**Response 200**
```json
{ "success": true, "message": "Logged out successfully" }
```

---

### GET /auth/me

Return current user profile. **Auth required.**

**Response 200**
```json
{
  "success": true,
  "data": {
    "id": "u_01", "name": "Jane Doe", "email": "jane@acme.com",
    "company": "ACME Corp", "role": "seller", "avatar": null, "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

---

## User Profile

### PUT /users/profile

Update authenticated user profile. **Auth required.**

**Request**
```json
{ "name": "Jane Smith", "company": "New Corp", "avatar": "https://cdn.econexus.com/avatars/u_01.jpg" }
```

**Response 200** — updated user object.

### PUT /users/password

Change password. **Auth required.**

**Request**
```json
{ "currentPassword": "OldPass!", "newPassword": "NewPass123!" }
```

---

## Waste Management

### GET /waste

List waste items with filtering and pagination.

**Query parameters**

| Parameter | Type | Description |
|-----------|------|-------------|
| `page` | number | Page number (default 1) |
| `limit` | number | Items per page (default 20, max 100) |
| `category` | string | Filter by category slug |
| `location` | string | Filter by city/region |
| `minPrice` | number | Minimum price |
| `maxPrice` | number | Maximum price |
| `status` | string | `available` \| `reserved` \| `sold` |
| `q` | string | Full-text search query |

**Response 200**
```json
{
  "success": true,
  "data": [ { "id": "w_01", "title": "Copper Wire Offcuts", "category": "metals", "quantity": 500, "unit": "kg", "price": 1200, "location": "Mumbai", "status": "available", "createdAt": "2024-06-01T09:00:00Z" } ],
  "pagination": { "page": 1, "limit": 20, "total": 84, "pages": 5 }
}
```

### GET /waste/:id

Return single waste item with seller info.

### POST /waste

Create a waste listing. **Auth required (seller).**

**Request (multipart/form-data)**

| Field | Type | Required |
|-------|------|----------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `category` | string | ✓ |
| `quantity` | number | ✓ |
| `unit` | string | ✓ |
| `price` | number | ✓ |
| `location` | string | ✓ |
| `images` | file[] | — |

**Response 201** — created waste item.

### PUT /waste/:id

Update a waste listing. **Auth required (owner).**

### DELETE /waste/:id

Delete a waste listing. **Auth required (owner).**

### GET /waste/:id/matches

AI-powered match recommendations for a waste item. **Auth required.**

**Response 200**
```json
{
  "success": true,
  "data": [
    { "item": { "id": "w_02", "title": "Scrap Copper Cable" }, "score": 0.92 },
    { "item": { "id": "w_07", "title": "Copper Tubing" }, "score": 0.87 }
  ]
}
```

---

## Machinery

### GET /machinery

List machinery items. Same query params as `/waste`.

### GET /machinery/:id

### POST /machinery

Create a machinery listing. **Auth required.**

**Request (multipart/form-data)**

| Field | Type | Required |
|-------|------|----------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `category` | string | ✓ |
| `dailyRate` | number | ✓ |
| `weeklyRate` | number | ✓ |
| `location` | string | ✓ |
| `specifications` | object | — |
| `images` | file[] | — |

### PUT /machinery/:id

### DELETE /machinery/:id

### POST /machinery/:id/book

Book a machine for a date range. **Auth required.**

**Request**
```json
{ "startDate": "2024-07-10", "endDate": "2024-07-17" }
```

**Response 201** — booking confirmation object.

---

## Labor

### GET /labor

List labor listings.

### GET /labor/:id

### POST /labor

Create a labor listing. **Auth required.**

**Request**
```json
{
  "title": "Certified Welders — 5-person team",
  "description": "Experienced in MIG/TIG welding...",
  "skillCategory": "welding",
  "hourlyRate": 35,
  "availability": "weekdays",
  "location": "Pune",
  "skills": ["MIG", "TIG", "SMAW"]
}
```

### PUT /labor/:id

### DELETE /labor/:id

---

## Workspace

### GET /workspace

List workspace listings.

### GET /workspace/:id

### POST /workspace

Create a workspace listing. **Auth required.**

**Request (multipart/form-data)**

| Field | Type | Required |
|-------|------|----------|
| `title` | string | ✓ |
| `description` | string | ✓ |
| `type` | string | ✓ (`warehouse`, `office`, `lab`, `cold-storage`) |
| `area` | number | ✓ (m²) |
| `dailyRate` | number | ✓ |
| `monthlyRate` | number | ✓ |
| `location` | string | ✓ |
| `amenities` | string[] | — |
| `images` | file[] | — |

### PUT /workspace/:id

### DELETE /workspace/:id

### POST /workspace/:id/book

Book a workspace. **Auth required.**

---

## Reviews

### POST /reviews

Submit a review. **Auth required.**

**Request**
```json
{ "targetId": "w_01", "targetType": "waste", "rating": 5, "comment": "Smooth transaction, accurate description." }
```

### GET /reviews/:targetType/:targetId

List reviews for a resource.

---

## Notifications

### GET /notifications

List notifications for authenticated user. **Auth required.**

**Response 200**
```json
{
  "success": true,
  "data": [
    { "id": "n_01", "type": "match", "message": "New waste match found", "read": false, "createdAt": "2024-06-15T10:00:00Z" }
  ]
}
```

### PUT /notifications/:id/read

Mark notification as read. **Auth required.**

### PUT /notifications/read-all

Mark all notifications as read. **Auth required.**

---

## Error Format

All errors follow:

```json
{
  "success": false,
  "error": "Human-readable error message",
  "details": [ { "field": "email", "message": "Invalid email address" } ]
}
```

| HTTP Code | Meaning |
|-----------|---------|
| 400 | Bad Request — validation error |
| 401 | Unauthorized — missing or invalid token |
| 403 | Forbidden — insufficient permissions |
| 404 | Not Found |
| 409 | Conflict — duplicate resource |
| 422 | Unprocessable Entity |
| 429 | Too Many Requests — rate limited |
| 500 | Internal Server Error |
