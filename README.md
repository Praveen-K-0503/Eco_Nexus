# EcoNexus 🌿

> AI-powered B2B circular economy marketplace platform

[![CI](https://github.com/Praveen-K-0503/Eco_Nexus/actions/workflows/ci.yml/badge.svg)](https://github.com/Praveen-K-0503/Eco_Nexus/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Overview

EcoNexus is a B2B marketplace that connects businesses to reduce waste and promote a circular economy through four core pillars:

| Pillar | Description |
|--------|-------------|
| ♻️ **Waste Exchange** | Buy/sell industrial waste as raw materials |
| 🏗️ **Machinery Sharing** | Rent idle equipment between businesses |
| 👷 **Labor Pooling** | Share seasonal or specialized workforce |
| 🏭 **Workspace Sharing** | Rent unused industrial/office space |

AI-driven matching recommendations surface the best opportunities for each business, reducing costs and environmental impact simultaneously.

---

## Features

- **Smart Matching** — ML-based recommendations for waste, machinery, labor, and workspace
- **Verified Listings** — Company verification and review system
- **Real-time Notifications** — Instant alerts for matches and messages
- **Secure Transactions** — JWT authentication, RBAC, end-to-end encryption
- **Analytics Dashboard** — Track savings, CO₂ offset, and circular economy metrics

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, TypeScript, Vite, TailwindCSS, Framer Motion |
| Backend | Node.js, Express, TypeScript, MongoDB, Redis |
| AI/ML | Python, FastAPI, Scikit-learn, Pandas |
| DevOps | Docker, Docker Compose, GitHub Actions |

---

## Quick Start

### Prerequisites
- Node.js ≥ 20
- Python ≥ 3.11
- Docker & Docker Compose
- MongoDB Atlas account (or local MongoDB)

### Run with Docker Compose (recommended)

```bash
git clone https://github.com/Praveen-K-0503/Eco_Nexus.git
cd Eco_Nexus

# Copy env files
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
cp ai-engine/.env.example ai-engine/.env

# Start all services
docker compose up --build
```

Services will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- AI Engine: http://localhost:8000

### Run locally (development)

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && npm install && npm run dev

# AI Engine
cd ai-engine && pip install -r requirements.txt && uvicorn src.main:app --reload --port 8000
```

See [docs/SETUP.md](docs/SETUP.md) for full setup instructions.

---

## Project Structure

```
Eco_Nexus/
├── frontend/          # React + TypeScript + Vite SPA
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── pages/       # Route-level page components
│       ├── hooks/       # Custom React hooks
│       ├── store/       # Zustand state management
│       ├── services/    # API client functions
│       └── types/       # TypeScript type definitions
├── backend/           # Express + TypeScript REST API
│   └── src/
│       ├── config/      # DB and app config
│       ├── models/      # Mongoose schemas
│       ├── routes/      # Express routers
│       ├── controllers/ # Route handlers
│       ├── middleware/  # Auth, validation, error handling
│       ├── services/    # Business logic
│       └── utils/       # Helper functions
├── ai-engine/         # FastAPI Python AI/ML service
│   └── src/
│       ├── models/      # ML model classes
│       ├── routes/      # FastAPI routers
│       └── services/    # Matching & recommendation logic
├── docs/              # Project documentation
└── .github/           # CI/CD workflows and templates
```

---

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [API Specification](docs/API_SPEC.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [Development Roadmap](docs/DEVELOPMENT_ROADMAP.md)
- [Feature Specs](docs/FEATURE_SPECS.md)
- [User Stories](docs/USER_STORIES.md)
- [Security](docs/SECURITY.md)
- [Testing Strategy](docs/TESTING_STRATEGY.md)
- [Design System](docs/DESIGN_SYSTEM.md)
- [Setup Guide](docs/SETUP.md)
- [Tech Stack Rationale](docs/TECH_STACK.md)

---

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes using [Conventional Commits](https://www.conventionalcommits.org)
4. Push and open a Pull Request

---

## Team

Built with ❤️ for a sustainable future.

---

## License

[MIT](LICENSE) © EcoNexus Team
AI-powered B2B circular economy marketplace for waste, machinery, labor &amp; workspace sharing
