# System Architecture

## High-Level Overview

EcoNexus is a multi-tier, microservices-oriented platform composed of three independently deployable services that communicate over a private Docker network in production and via local ports in development.

```
┌─────────────────────────────────────────────────────────────────────┐
│                          Client Browser                             │
└────────────────────────────┬────────────────────────────────────────┘
                             │ HTTPS (port 443 / 3000 dev)
┌────────────────────────────▼────────────────────────────────────────┐
│                     Frontend Service                                │
│              React 18 + TypeScript + Vite SPA                       │
│         (Nginx static serving in production container)              │
└────────────────────────────┬────────────────────────────────────────┘
                             │ REST /api/* (port 5000)
┌────────────────────────────▼────────────────────────────────────────┐
│                      Backend Service                                │
│              Node.js + Express + TypeScript                         │
│   ┌──────────┐ ┌───────────┐ ┌────────────┐ ┌──────────────────┐  │
│   │  Auth    │ │  Waste    │ │ Machinery  │ │  Labor/Workspace │  │
│   │  Routes  │ │  Routes   │ │  Routes    │ │  Routes          │  │
│   └──────────┘ └───────────┘ └────────────┘ └──────────────────┘  │
│                    │ Mongoose ODM            │ HTTP                 │
└────────────────────┼────────────────────────┼──────────────────────┘
           ┌─────────┴──────┐        ┌────────┴──────────────────────┐
           │   MongoDB 7    │        │       AI Engine Service        │
           │  (port 27017)  │        │   Python + FastAPI             │
           │                │        │   Scikit-learn models          │
           └────────────────┘        │   (port 8000)                  │
                                     └───────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────┐
│                       Redis 7 (port 6379)                            │
│         Session cache · Rate limiting · Job queue                    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Microservices Architecture

### Frontend Service

- **Technology:** React 18, TypeScript, Vite, TailwindCSS, Framer Motion
- **State management:** Zustand (global) + React Query (server state)
- **Routing:** React Router v6
- **Form handling:** React Hook Form + Zod validation
- **Build artifact:** Static files served by Nginx in Docker

### Backend Service

- **Technology:** Node.js 20, Express 4, TypeScript
- **Database ORM:** Mongoose (MongoDB)
- **Authentication:** JWT access tokens (15 min) + refresh tokens (7 days) stored in Redis
- **Caching:** Redis for session data and rate limiting counters
- **File uploads:** Multer, stored in a Docker volume (or S3 in production)
- **Email:** Nodemailer with configurable SMTP

### AI Engine Service

- **Technology:** Python 3.11, FastAPI, Uvicorn
- **ML libraries:** Scikit-learn, Pandas, NumPy
- **Tasks:** Item similarity matching, price recommendation, demand forecasting
- **Model persistence:** Joblib serialization, mounted Docker volume
- **Database access:** Motor (async MongoDB driver)

---

## Component Interactions

### Authentication Flow

```
Client → POST /api/auth/login → Backend
Backend → bcrypt.compare(password) → MongoDB
Backend → sign JWT (accessToken + refreshToken)
Backend → store refreshToken hash in Redis (TTL 7d)
Backend → return tokens to Client
Client → store accessToken in memory, refreshToken in httpOnly cookie
```

### Listing Creation Flow

```
Client → POST /api/waste (multipart/form-data) → Backend
Backend → validate input (Zod) → upload images (Multer)
Backend → save WasteItem document → MongoDB
Backend → POST /match (item data) → AI Engine
AI Engine → compute similarity scores → return ranked matches
Backend → create Notification for matched users
Backend → return created listing + matches to Client
```

### AI Matching Flow

```
Backend → POST http://ai-engine:8000/match/waste
AI Engine → load TF-IDF vectorizer + cosine similarity model
AI Engine → score all active listings against new item
AI Engine → return top-N matches with scores
Backend → save match results to MongoDB (TTL index)
```

---

## Data Flow

1. **User action** triggers an API call from the React frontend.
2. **Backend** authenticates the request via JWT middleware.
3. **Backend** validates request body with Zod/express-validator.
4. **Backend** performs business logic and database operations.
5. **Backend** optionally calls **AI Engine** for recommendations.
6. **Backend** returns a JSON response.
7. **React Query** caches the response and updates the UI.

---

## Technology Choices Rationale

| Decision | Alternative Considered | Reason |
|----------|----------------------|--------|
| React 18 | Vue 3, Angular | Team familiarity; large ecosystem; concurrent features |
| Vite | Create React App, Webpack | Significantly faster HMR and build times |
| MongoDB | PostgreSQL | Flexible schema ideal for diverse listing types |
| JWT + Redis | Sessions only | Stateless scalability + instant token revocation |
| FastAPI | Flask, Django REST | Native async, automatic OpenAPI docs, Pydantic validation |
| TailwindCSS | CSS Modules, Styled Components | Rapid iteration; consistent design tokens |

---

## Scalability Considerations

### Horizontal Scaling

- **Frontend:** CDN-delivered static assets; no server-side state
- **Backend:** Stateless (no in-memory sessions); scale behind a load balancer
- **AI Engine:** CPU-bound tasks; scale with additional replicas behind Nginx upstream
- **MongoDB:** Replica set for read scaling; sharding for write scaling at high volume
- **Redis:** Sentinel for high availability; Cluster for extreme write throughput

### Performance Optimizations

- MongoDB indexes on frequently queried fields (category, location, status, sellerId)
- Redis caching for AI match results (TTL 10 minutes)
- React Query stale-time to minimize redundant API calls
- Image compression and CDN delivery for listing photos
- Database connection pooling via Mongoose

### Future Architecture Considerations

- Extract Notification service using message queues (RabbitMQ / SQS)
- Add WebSocket gateway for real-time chat and live notifications
- Introduce GraphQL federation for complex cross-pillar queries
- Implement event sourcing for Transaction audit trail
