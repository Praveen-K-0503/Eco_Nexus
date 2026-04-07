# Development Roadmap

## Overview

EcoNexus is built in four phases over 14 weeks, progressing from foundational infrastructure to AI-powered features and production readiness.

---

## Phase 1 — Foundation (Weeks 1–2)

**Goal:** Establish project infrastructure, tooling, and core authentication.

### Milestones

| # | Milestone | Owner | Due |
|---|-----------|-------|-----|
| 1.1 | Repository setup, CI/CD pipeline | DevOps | Week 1 |
| 1.2 | Docker Compose environment working | DevOps | Week 1 |
| 1.3 | Backend: Express + MongoDB + auth endpoints | Backend | Week 2 |
| 1.4 | Frontend: Vite + React + TailwindCSS scaffold | Frontend | Week 2 |
| 1.5 | AI Engine: FastAPI scaffold + health endpoint | AI | Week 2 |

### Deliverables

- [x] GitHub repository with branch protection rules
- [x] `docker compose up` spins all services
- [x] CI workflow: lint + test on every PR
- [ ] `POST /auth/register`, `POST /auth/login`, `POST /auth/refresh`, `POST /auth/logout`
- [ ] JWT middleware with refresh token rotation
- [ ] Login and Register pages (frontend)
- [ ] Global design tokens (colors, typography) in TailwindCSS
- [ ] User model + MongoDB connection

---

## Phase 2 — Core Features (Weeks 3–6)

**Goal:** Build all four marketplace pillars with CRUD operations and basic search.

### Milestones

| # | Milestone | Owner | Due |
|---|-----------|-------|-----|
| 2.1 | Waste Exchange CRUD + image upload | Backend | Week 3 |
| 2.2 | Waste Exchange UI (list, detail, create) | Frontend | Week 3 |
| 2.3 | Machinery Sharing CRUD + booking | Backend | Week 4 |
| 2.4 | Machinery Sharing UI | Frontend | Week 4 |
| 2.5 | Labor Pooling CRUD | Backend | Week 5 |
| 2.6 | Labor Pooling UI | Frontend | Week 5 |
| 2.7 | Workspace Sharing CRUD + booking | Backend | Week 6 |
| 2.8 | Workspace Sharing UI | Frontend | Week 6 |

### Deliverables

- [ ] Waste, Machinery, Labor, Workspace listing APIs (CRUD)
- [ ] Pagination and full-text search for all listing types
- [ ] Image upload with Multer (backend) and preview (frontend)
- [ ] Booking endpoints for Machinery and Workspace
- [ ] Transaction records created on booking confirmation
- [ ] User dashboard showing own listings and bookings
- [ ] Review and rating system
- [ ] Notification model + API

---

## Phase 3 — AI Features (Weeks 7–10)

**Goal:** Implement AI-powered matching, recommendations, and analytics.

### Milestones

| # | Milestone | Owner | Due |
|---|-----------|-------|-----|
| 3.1 | TF-IDF text vectorizer for waste items | AI | Week 7 |
| 3.2 | Cosine similarity matching endpoint | AI | Week 7 |
| 3.3 | Backend integration: match results on listing creation | Backend | Week 8 |
| 3.4 | "Matches for You" section on frontend dashboard | Frontend | Week 8 |
| 3.5 | Price recommendation model (regression) | AI | Week 9 |
| 3.6 | Price suggestions shown in listing create form | Frontend | Week 9 |
| 3.7 | Demand heatmap by category + location | AI | Week 10 |
| 3.8 | Analytics dashboard page | Frontend | Week 10 |

### Deliverables

- [ ] `/match/waste`, `/match/machinery`, `/match/labor`, `/match/workspace` endpoints (AI Engine)
- [ ] Price recommendation API (`/recommend/price`)
- [ ] Backend caches AI results in Redis (TTL 10 min)
- [ ] "Recommended for you" cards on dashboard
- [ ] Price suggestion widget in listing forms
- [ ] Category demand heatmap visualization
- [ ] CO₂ offset tracker (estimated based on waste diverted)

---

## Phase 4 — Polish & Launch (Weeks 11–14)

**Goal:** Security hardening, performance optimization, documentation, and production deployment.

### Milestones

| # | Milestone | Owner | Due |
|---|-----------|-------|-----|
| 4.1 | Full test coverage ≥ 80% (unit + integration) | All | Week 11 |
| 4.2 | End-to-end tests with Playwright | Frontend | Week 11 |
| 4.3 | Security audit: OWASP checklist, rate limiting | Backend | Week 12 |
| 4.4 | Performance: lazy loading, image optimization, CDN | Frontend | Week 12 |
| 4.5 | Production deployment (Vercel + Railway + Atlas) | DevOps | Week 13 |
| 4.6 | Beta testing with 5 real business users | PM | Week 13 |
| 4.7 | Bug fixes from beta feedback | All | Week 14 |
| 4.8 | v1.0 public launch | All | Week 14 |

### Deliverables

- [ ] All tests passing, coverage reports in CI
- [ ] Playwright e2e suite for critical user flows
- [ ] HTTPS everywhere; CORS locked down
- [ ] Password reset via email (Nodemailer)
- [ ] Account verification via email
- [ ] Admin dashboard (user management, listing moderation)
- [ ] Production-ready Docker images (multi-stage builds)
- [ ] Monitoring (Sentry for error tracking)
- [ ] Public launch announcement

---

## Post-Launch Backlog (v1.1+)

- Real-time chat between buyers and sellers (Socket.io)
- Mobile app (React Native)
- Payment gateway integration (Stripe)
- Multi-language / i18n support
- Public API for enterprise integrations
- Blockchain-based waste audit trail
- Carbon credit certificate generation
