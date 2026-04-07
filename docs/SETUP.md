# Local Development Setup Guide

## Prerequisites

| Tool | Minimum Version | Install |
|------|----------------|---------|
| Node.js | 20 LTS | https://nodejs.org |
| npm | 10 | (bundled with Node.js) |
| Python | 3.11 | https://python.org |
| Docker Desktop | 4.x | https://docs.docker.com/get-docker/ |
| Docker Compose | v2 | (bundled with Docker Desktop) |
| Git | 2.x | https://git-scm.com |

---

## 1. Clone the Repository

```bash
git clone https://github.com/Praveen-K-0503/Eco_Nexus.git
cd Eco_Nexus
```

---

## 2. Set Up Environment Variables

Copy each service's example env file and fill in the values:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
cp ai-engine/.env.example ai-engine/.env
```

### Backend `.env` — key variables to set

| Variable | Notes |
|----------|-------|
| `MONGODB_URI` | See MongoDB section below |
| `JWT_SECRET` | Generate: `openssl rand -hex 32` |
| `JWT_REFRESH_SECRET` | Generate: `openssl rand -hex 32` |
| `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` | Use Mailtrap for local testing |

---

## 3. MongoDB Setup

### Option A — MongoDB Atlas (recommended for all environments)

1. Create a free cluster at https://cloud.mongodb.com
2. Create a database user with read/write access
3. Whitelist your IP address (or use `0.0.0.0/0` for development only)
4. Copy the connection string: `mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/econexus`
5. Paste into `backend/.env` as `MONGODB_URI`

### Option B — Local MongoDB via Docker

If you use Docker Compose (Section 5), MongoDB is started automatically at `mongodb://localhost:27017/econexus`. No additional setup needed.

---

## 4. Run Each Service Locally (without Docker)

### Frontend

```bash
cd frontend
npm install
npm run dev
# → http://localhost:3000
```

### Backend

```bash
cd backend
npm install
npm run dev
# → http://localhost:5000
# API health check: curl http://localhost:5000/health
```

### AI Engine

```bash
cd ai-engine
python -m venv .venv
source .venv/bin/activate       # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn src.main:app --reload --port 8000
# → http://localhost:8000
# Health check: curl http://localhost:8000/health
```

---

## 5. Run with Docker Compose (easiest)

This starts all five services (frontend, backend, ai-engine, mongodb, redis) in one command.

```bash
# Make sure frontend/.env, backend/.env, ai-engine/.env are populated

docker compose up --build

# Or run in detached mode:
docker compose up --build -d

# Stop all services:
docker compose down

# Remove volumes (resets database):
docker compose down -v
```

Services:

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:5000 |
| AI Engine | http://localhost:8000 |
| MongoDB | mongodb://localhost:27017 |
| Redis | redis://localhost:6379 |

---

## 6. Run Tests

```bash
# Backend
cd backend && npm run test

# Frontend
cd frontend && npm run test

# AI Engine
cd ai-engine && source .venv/bin/activate && pytest
```

---

## 7. Run Linters

```bash
cd frontend && npm run lint
cd backend && npm run lint
```

---

## Troubleshooting

### Port already in use

Find and kill the process:
```bash
# Find process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Docker build fails with npm error

Clear npm cache and rebuild:
```bash
docker compose down
docker builder prune -f
docker compose up --build
```

### MongoDB connection refused

- Confirm Docker is running: `docker ps`
- Check if MongoDB container is healthy: `docker compose ps`
- If using Atlas, verify your IP is whitelisted and credentials are correct

### AI Engine import errors

Ensure you are using the virtual environment:
```bash
source ai-engine/.venv/bin/activate
pip install -r ai-engine/requirements.txt
```

### Backend TypeScript errors on startup

Run a clean build:
```bash
cd backend && npm run build
```

### Environment variable not picked up

- Ensure `.env` file is in the correct directory (not the project root)
- Restart the service after editing `.env`
- Variable names must match exactly — no extra quotes or spaces

---

## Useful Commands

```bash
# View backend logs in Docker
docker compose logs -f backend

# Open a shell inside the backend container
docker compose exec backend sh

# Connect to MongoDB shell
docker compose exec mongodb mongosh econexus

# Connect to Redis CLI
docker compose exec redis redis-cli
```
