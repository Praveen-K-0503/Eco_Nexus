# Technology Stack Rationale

## Frontend

### React 18
- Component model enables clean separation of UI concerns
- Concurrent features (Suspense, `useTransition`) enable smooth loading states without complex state machines
- Massive ecosystem: React Query, React Router, Framer Motion, etc.
- Team familiarity accelerates development
- React 18 Server Components are available for future SSR optimization

### TypeScript
- Catches type errors at compile time before they reach production
- Dramatically improves IDE auto-complete and refactoring safety
- Explicit interfaces serve as living documentation for API contracts
- Reduces runtime errors by encoding business rules in types

### Vite
- Hot Module Replacement (HMR) is near-instant vs. webpack's 5–30 second rebuild times
- Native ES modules in development — no bundling overhead
- Production builds use Rollup, producing highly optimized output
- Simple configuration compared to Create React App or webpack

### TailwindCSS
- Design decisions encoded directly in markup — no context-switching between CSS files
- Design tokens (colors, spacing, typography) enforced through a config file
- PurgeCSS removes unused styles, resulting in minimal production CSS bundles
- Consistent sizing scale prevents arbitrary pixel values across the codebase

### Framer Motion
- Declarative animation API compatible with React's component model
- Built-in support for gesture-based interactions (drag, hover, tap)
- AnimatePresence handles mount/unmount transitions that CSS cannot

### Zustand
- Minimal boilerplate compared to Redux; no Provider wrapping required
- Devtools support for debugging global state
- Selective subscriptions prevent unnecessary re-renders

### React Query (@tanstack/react-query)
- Automatic caching, background refetching, and stale-while-revalidate pattern
- Reduces boilerplate for loading/error/data state management
- Optimistic mutations improve perceived performance

---

## Backend

### Node.js 20 LTS
- Non-blocking I/O is ideal for an API that makes many concurrent database and HTTP calls
- JavaScript/TypeScript across frontend and backend reduces context switching
- npm ecosystem provides packages for all required functionality
- Long Term Support until April 2026

### Express 4
- Minimal, unopinionated framework that allows full control over middleware pipeline
- Industry standard — well-understood by most Node.js developers
- Rich middleware ecosystem (helmet, cors, morgan, rate-limit)
- Easy to test with supertest

### TypeScript (backend)
- Shared type definitions between frontend and backend possible (future monorepo)
- Catches integration errors (wrong field names, missing properties) before runtime

### MongoDB 7 (Mongoose)
- Flexible document schema accommodates four very different listing types without a complex relational structure
- JSON-native storage reduces serialization overhead
- Mongoose provides schema validation at the ODM level
- Full-text search built in (Atlas Search for production)
- Horizontal scaling via sharding when needed

### JWT Authentication
- Stateless access tokens enable horizontal scaling without shared session storage
- Short TTL (15 min) limits exposure if a token is stolen
- Refresh token rotation (+ Redis blacklisting) provides stateful revocation capability

### Redis
- Sub-millisecond latency for token blacklisting and rate limit counters
- Shared cache across backend instances ensures rate limits work correctly behind load balancers
- Pub/Sub channel available for future real-time notification fanout

### Helmet / CORS / express-rate-limit
- Established, well-maintained security middleware that handles common attack vectors
- Reduces security audit surface vs. hand-rolling these protections

---

## AI / ML

### Python 3.11
- De-facto language for data science and ML
- CPython 3.11 is 10–60% faster than 3.10 for numeric workloads

### FastAPI
- Async-first framework built on Starlette; matches Node.js performance on I/O-bound tasks
- Automatic OpenAPI documentation from type hints — zero extra effort
- Pydantic models provide request/response validation at the framework level
- Easy to unit test with `TestClient`

### Scikit-learn
- Mature, well-documented library covering TF-IDF vectorization, cosine similarity, regression
- Minimal setup compared to deep learning frameworks for the initial matching requirements
- Models are easily serialized with joblib for caching between restarts

### Motor (async MongoDB)
- Official async MongoDB driver for Python
- Compatible with FastAPI's async runtime; prevents blocking the event loop

---

## DevOps

### Docker
- Eliminates "works on my machine" issues by packaging each service with all its dependencies
- Multi-stage builds produce lean production images
- Consistent environment between development (Docker Compose) and production (container platform)

### Docker Compose
- One command (`docker compose up`) starts the entire five-service stack for local development
- Health checks ensure services start in the correct dependency order
- Named volumes persist data across container restarts

### GitHub Actions
- Native CI/CD integration with GitHub — no extra account or service
- Matrix builds allow running tests across multiple Node.js versions in parallel
- Secrets management via GitHub Secrets for deployment credentials
- Free for public repositories; generous free tier for private

### Deployment Targets
- **Frontend:** Vercel — instant global CDN, zero-config React/Vite deployment
- **Backend:** Railway — container-based deployment with managed MongoDB available
- **Database:** MongoDB Atlas — managed cloud MongoDB with free M0 tier for development
