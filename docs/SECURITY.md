# Security Policy & Best Practices

## Reporting a Vulnerability

**Do NOT open a public GitHub issue for security vulnerabilities.**
Email the team privately, include steps to reproduce, and allow up to 72 hours for an initial response.
We follow responsible disclosure — please give us time to patch before publishing.

---

## Authentication

### JSON Web Tokens

- **Access tokens** expire in 15 minutes to minimize exposure if stolen.
- **Refresh tokens** expire in 7 days; each use rotates the token (new token issued, old one revoked).
- Refresh token hashes (not plaintext) are stored in Redis with a matching TTL.
- On logout, the refresh token is immediately deleted from Redis.
- JWTs are signed with `HS256`. Secrets must be ≥ 32 random bytes.
- Never store access tokens in `localStorage` — use in-memory storage; store refresh tokens in `httpOnly`, `Secure`, `SameSite=Strict` cookies.

### Password Policy

- Minimum 8 characters; must include at least one uppercase, one lowercase, one digit.
- Passwords are hashed with **bcrypt** at a work factor of 12.
- Never log passwords or tokens at any level.
- Password reset links are single-use, time-limited (1 hour), and delivered over email.

---

## Authorization (RBAC)

Three roles: `buyer`, `seller`, `admin`.

| Action | buyer | seller | admin |
|--------|-------|--------|-------|
| Browse listings | ✓ | ✓ | ✓ |
| Create listing | — | ✓ | ✓ |
| Edit own listing | — | ✓ | ✓ |
| Delete any listing | — | — | ✓ |
| Submit inquiry / booking | ✓ | ✓ | ✓ |
| Access admin panel | — | — | ✓ |
| Suspend users | — | — | ✓ |

Authorization is enforced in Express middleware, not only the frontend — never trust the client for permission checks.

---

## Input Validation

- **All** request bodies are validated with Zod schemas before reaching controller logic.
- express-validator is used for query string and URL parameter validation.
- File uploads are validated for MIME type (whitelist: `image/jpeg`, `image/png`, `image/webp`) and size (max 10 MB).
- File names are sanitized; uploaded files are stored with UUIDs, not original names.
- MongoDB queries use Mongoose which prevents NoSQL injection by default; never pass raw user strings into `$where` or `$function` operators.
- Reject unexpected fields using Zod `.strict()` on request schemas.

---

## Rate Limiting

- Global rate limit: **100 requests per 15 minutes** per IP (configurable via env vars).
- Authentication endpoints (`/auth/login`, `/auth/register`, `/auth/reset-password`): stricter limit of **10 requests per 15 minutes** per IP.
- Rate limit state is stored in Redis to work correctly behind multiple backend instances.
- Return `429 Too Many Requests` with `Retry-After` header.

---

## HTTPS & Transport Security

- All production traffic must use **HTTPS** (TLS 1.2+).
- HTTP requests are redirected to HTTPS at the load balancer / Nginx level.
- HSTS header is set: `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
- Self-signed certificates are acceptable in development only.

---

## Security Headers (Helmet.js)

The backend uses `helmet` which sets the following headers by default:

```
Content-Security-Policy
X-DNS-Prefetch-Control: off
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: no-referrer
X-Permitted-Cross-Domain-Policies: none
```

CSP is configured to whitelist only known origins for scripts, styles, and images.

---

## CORS

```typescript
cors({
  origin: process.env.CORS_ORIGIN,   // exact frontend URL — no wildcard in production
  credentials: true,                  // required for httpOnly cookies
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})
```

Never use `origin: '*'` in production. The allowed origin is set via environment variable.

---

## Environment Variable Management

- Secrets are **never** committed to version control.
- `.env` files are listed in `.gitignore`.
- `.env.example` files (with placeholder values) are committed to guide setup.
- In production, secrets are injected via the deployment platform's secret manager (e.g., Railway environment variables, Vercel environment variables).
- Rotate all secrets immediately if they are accidentally exposed.
- Required variables and their formats are validated at startup using `zod` or a manual check — the server refuses to start if required variables are missing.

---

## Dependency Security

- `npm audit` is run in CI on every PR; builds fail on **critical** vulnerabilities.
- Python dependencies are pinned to exact versions in `requirements.txt`.
- Dependabot is enabled to automatically open PRs for dependency updates.
- Only install packages with a clear, maintained provenance; review any new dependency before adding it.

---

## OWASP Top 10 Mitigations

| OWASP Risk | Mitigation |
|------------|-----------|
| A01 Broken Access Control | RBAC middleware on every protected route |
| A02 Cryptographic Failures | HTTPS everywhere; bcrypt for passwords; JWT secrets ≥ 32 bytes |
| A03 Injection | Mongoose parameterized queries; Zod input validation |
| A04 Insecure Design | Threat modeling during design phase; least-privilege principle |
| A05 Security Misconfiguration | Helmet headers; CORS locked down; no debug mode in production |
| A06 Vulnerable Components | npm audit + Dependabot in CI |
| A07 Authentication Failures | Rate limiting; refresh token rotation; account lockout |
| A08 Integrity Failures | Signed JWTs; integrity checks for uploaded files |
| A09 Logging Failures | Morgan request logging; separate error log; no sensitive data in logs |
| A10 SSRF | AI Engine URL is internal only; no user-controlled URL fetching |

---

## Logging

- Use **Morgan** for HTTP request logging in production (combined format).
- Log levels: `error`, `warn`, `info`, `debug` (debug disabled in production).
- **Never** log: passwords, tokens, credit card numbers, full email addresses, or any PII beyond user IDs.
- Logs are written to stdout/stderr and collected by the container orchestrator.
- Error responses to clients never include stack traces or internal details.

---

## Incident Response

1. Identify and contain the issue (revoke tokens, disable affected endpoint if needed).
2. Assess impact (which users/data affected).
3. Notify affected users within 72 hours as required by GDPR / applicable regulations.
4. Root cause analysis and permanent fix.
5. Document lessons learned; update security checklist.
