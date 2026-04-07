# Testing Strategy

## Philosophy

- Tests should be **fast**, **reliable**, and **easy to maintain**.
- Tests live alongside the code they test.
- A failing test is a blocking issue — no merging with broken tests.
- Coverage is a health metric, not the goal; meaningful tests over gaming percentages.

---

## Coverage Targets

| Layer | Target | Tool |
|-------|--------|------|
| Backend unit tests | ≥ 80% | Jest |
| Backend integration tests | Critical paths | Jest + Supertest |
| Frontend unit tests | ≥ 80% | Vitest |
| Frontend component tests | Key components | Vitest + Testing Library |
| E2E tests | Critical user flows | Playwright |
| AI Engine unit tests | ≥ 70% | pytest |

---

## Backend Testing (Jest + Supertest)

### Unit Tests

Location: `backend/tests/unit/`

Test in isolation using mocks for external dependencies (MongoDB, Redis, email).

```typescript
// backend/tests/unit/auth.service.test.ts
describe('AuthService.hashPassword', () => {
  it('returns a bcrypt hash', async () => {
    const hash = await AuthService.hashPassword('mypassword')
    expect(hash).toMatch(/^\$2[aby]\$/)
  })
})
```

Key areas to unit test:
- Service functions (business logic)
- Utility functions (formatters, validators)
- Middleware functions (auth, rate limit, error handler)
- Zod schema validation

### Integration Tests

Location: `backend/tests/integration/`

Use `supertest` against the real Express app, with a test MongoDB database (in-memory via `mongodb-memory-server`) and mocked Redis.

```typescript
// backend/tests/integration/waste.routes.test.ts
describe('POST /api/waste', () => {
  it('creates a listing when authenticated as seller', async () => {
    const res = await request(app)
      .post('/api/waste')
      .set('Authorization', `Bearer ${sellerToken}`)
      .send(validWastePayload)
    expect(res.status).toBe(201)
    expect(res.body.data.title).toBe(validWastePayload.title)
  })

  it('returns 401 without a token', async () => {
    const res = await request(app).post('/api/waste').send(validWastePayload)
    expect(res.status).toBe(401)
  })
})
```

### Running Backend Tests

```bash
cd backend
npm run test               # all tests with coverage
npm run test -- --watch    # watch mode during development
npm run test -- --testPathPattern=auth  # run specific file
```

---

## Frontend Testing (Vitest + Testing Library)

### Unit Tests

Location: `frontend/src/**/*.test.ts(x)`

Test pure utility functions and custom hooks.

```typescript
// frontend/src/utils/index.test.ts
import { formatCurrency } from './index'

describe('formatCurrency', () => {
  it('formats USD amounts', () => {
    expect(formatCurrency(1200)).toBe('$1,200.00')
  })
})
```

### Component Tests

Use `@testing-library/react` to render components and assert on visible output.

```typescript
// frontend/src/components/WasteCard.test.tsx
import { render, screen } from '@testing-library/react'
import WasteCard from './WasteCard'

it('displays the listing title', () => {
  render(<WasteCard title="Copper Wire" price={500} category="metals" />)
  expect(screen.getByText('Copper Wire')).toBeInTheDocument()
})
```

Guidelines:
- Test what the user sees, not implementation details
- Use `getByRole`, `getByLabelText`, `getByText` — avoid `getByTestId` unless necessary
- Mock network calls with `msw` (Mock Service Worker)

### Running Frontend Tests

```bash
cd frontend
npm run test               # all tests
npm run test -- --coverage # with coverage report
```

---

## End-to-End Testing (Playwright)

Location: `e2e/`

E2E tests exercise complete user flows through the real browser against a running development environment.

### Critical Flows to Cover

1. **Registration & Login** — register a new account, verify email (mock), log in
2. **Create Waste Listing** — fill form, upload image, publish listing
3. **Browse & Search** — search for a listing, apply filters, view detail
4. **Submit Inquiry** — buyer sends inquiry to seller; seller sees notification
5. **Booking Flow** — renter books a machine; owner approves
6. **Dashboard** — user sees their listings and bookings

### Example Test

```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test('user can log in and see dashboard', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Log In')
  await page.fill('[name=email]', 'test@example.com')
  await page.fill('[name=password]', 'TestPass123!')
  await page.click('button[type=submit]')
  await expect(page).toHaveURL('/dashboard')
  await expect(page.locator('h1')).toContainText('Welcome')
})
```

### Running E2E Tests

```bash
npx playwright test            # headless
npx playwright test --headed   # with browser visible
npx playwright show-report     # open HTML report
```

---

## AI Engine Testing (pytest)

Location: `ai-engine/tests/`

```python
# ai-engine/tests/test_matching.py
def test_cosine_similarity_returns_scores_between_0_and_1():
    scores = compute_similarity("copper wire scrap", ["copper cable", "aluminium sheet"])
    assert all(0 <= s <= 1 for s in scores)
```

### Running AI Tests

```bash
cd ai-engine
pytest --cov=src --cov-report=term-missing
```

---

## CI Integration

All test suites run automatically on every PR via GitHub Actions (`.github/workflows/ci.yml`):

1. **lint-frontend** → ESLint
2. **test-frontend** → Vitest (with coverage)
3. **lint-backend** → ESLint
4. **test-backend** → Jest (with coverage)
5. **test-ai** → pytest

PRs cannot be merged unless all CI jobs are green.

Coverage reports are uploaded as artifacts and can be viewed in the Actions UI.

---

## Test Data & Fixtures

- Use **factories** (not hard-coded objects) for generating test data — keeps tests DRY.
- Backend: `backend/tests/factories/` — simple builder functions.
- Frontend: `frontend/src/test-utils/` — shared render helpers with providers.
- Never use production data in tests.
- Seed scripts for integration tests are isolated and cleaned up after each test suite.

---

## What NOT to Test

- Third-party library internals (Mongoose, Axios, etc.)
- Trivial getters/setters with no logic
- Auto-generated TypeScript types
- Styling-only changes
