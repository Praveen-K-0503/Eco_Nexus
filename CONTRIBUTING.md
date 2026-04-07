# Contributing to EcoNexus

Thank you for your interest in contributing to EcoNexus! This guide will help you get started.

---

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Code Style](#code-style)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)

---

## Code of Conduct

Be respectful, inclusive, and constructive. Harassment of any kind is not tolerated.

---

## Getting Started

1. **Fork** the repository and clone your fork:
   ```bash
   git clone https://github.com/<your-username>/Eco_Nexus.git
   cd Eco_Nexus
   ```

2. Add the upstream remote:
   ```bash
   git remote add upstream https://github.com/Praveen-K-0503/Eco_Nexus.git
   ```

3. Set up the project locally — see [docs/SETUP.md](docs/SETUP.md).

4. Keep your fork in sync:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

---

## Branch Naming

Use the following prefixes:

| Prefix | Purpose | Example |
|--------|---------|---------|
| `feature/` | New feature | `feature/waste-listing-search` |
| `fix/` | Bug fix | `fix/auth-token-expiry` |
| `docs/` | Documentation | `docs/update-api-spec` |
| `refactor/` | Code refactoring | `refactor/extract-auth-middleware` |
| `test/` | Tests only | `test/waste-controller-unit` |
| `chore/` | Build, CI, deps | `chore/upgrade-react-18` |
| `hotfix/` | Critical production fix | `hotfix/login-crash` |

Branch names must be **lowercase**, use **hyphens** (not underscores), and be descriptive but concise.

---

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Format

```
<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
```

### Types

| Type | When to use |
|------|------------|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Formatting, missing semicolons, etc. (no logic change) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or correcting tests |
| `chore` | Build process, dependency updates, CI config |
| `perf` | Performance improvement |
| `ci` | CI/CD configuration changes |

### Examples

```
feat(waste): add category filter to waste listing search

fix(auth): resolve refresh token not rotating on reuse

docs(api): document workspace booking endpoints

chore(deps): upgrade mongoose to v8.0.0
```

### Rules

- Use the **imperative mood** in the summary ("add" not "added")
- Summary line ≤ 72 characters
- Reference issues in the footer: `Closes #42`, `Fixes #17`
- Breaking changes must include `BREAKING CHANGE:` in the footer

---

## Code Style

### TypeScript / JavaScript

- Use **TypeScript** for all new code
- Follow the ESLint config already in the project (`npm run lint` must pass with zero warnings)
- Prefer `const` over `let`; avoid `var`
- Use explicit return types on exported functions
- Keep functions short and single-purpose
- Prefer named exports over default exports for utilities

### Python

- Follow [PEP 8](https://pep8.org/)
- Use type hints for all function signatures
- Use `snake_case` for variables and functions, `PascalCase` for classes
- Maximum line length: 88 characters (Black formatter)
- Docstrings for all public functions and classes

### CSS / TailwindCSS

- Use Tailwind utility classes; avoid writing custom CSS unless absolutely necessary
- Extract repeated patterns into component classes with `@apply`
- Follow the design tokens defined in [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md)

### General

- No commented-out code in PRs
- Remove all `console.log` / `print` debug statements before submitting
- Keep files focused — one primary concern per file

---

## Pull Request Process

1. **Create a branch** from `develop` (not `main`):
   ```bash
   git checkout -b feature/my-feature upstream/develop
   ```

2. **Make your changes** with atomic, well-described commits.

3. **Run checks locally** before pushing:
   ```bash
   # Frontend
   cd frontend && npm run lint && npm run test

   # Backend
   cd backend && npm run lint && npm run test

   # AI Engine
   cd ai-engine && pytest
   ```

4. **Push** and open a Pull Request against the `develop` branch.

5. **Fill out the PR template** completely — do not delete any sections.

6. **Request a review** from at least one team member.

7. **Address review feedback** by pushing additional commits (do not force-push during review).

8. **Squash and merge** once approved (the merge button will be configured for squash merges).

### PR Checklist

- [ ] Tests added or updated for the change
- [ ] All CI checks pass
- [ ] Documentation updated if needed
- [ ] No secrets or credentials committed
- [ ] PR description clearly explains the change and motivation

### Review SLA

- Reviewers should respond within **2 business days**
- Authors should address feedback within **3 business days**

---

## Issue Reporting

- Search existing issues before opening a new one
- Use the provided issue templates (Bug Report / Feature Request)
- Be as specific as possible — vague issues will be closed
- For security vulnerabilities, do **not** open a public issue — email the team directly instead

---

## Questions?

Open a [Discussion](https://github.com/Praveen-K-0503/Eco_Nexus/discussions) or reach out via the project's communication channels.
