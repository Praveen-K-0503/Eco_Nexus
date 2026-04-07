# EcoNexus AI Engine

Python FastAPI service providing AI-powered matching and recommendation features for the EcoNexus platform.

## Features

- **Waste Matching** — TF-IDF + cosine similarity to surface the best buyers/sellers for waste listings
- **Machinery Matching** — Equipment similarity scoring by spec and category
- **Labor Matching** — Skill-based matching for workforce requests
- **Workspace Matching** — Space type and amenity-based similarity
- **Price Recommendation** — Regression model suggesting competitive pricing

## Tech Stack

- Python 3.11
- FastAPI + Uvicorn
- Scikit-learn (TF-IDF, cosine similarity, regression)
- Pandas / NumPy
- Motor (async MongoDB)
- Redis (result caching)

## Running Locally

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn src.main:app --reload --port 8000
```

API docs: http://localhost:8000/docs

## Running Tests

```bash
pytest --cov=src --cov-report=term-missing
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/match/waste` | Find matches for a waste item |
| POST | `/match/machinery` | Find matches for a machinery item |
| POST | `/match/labor` | Find matches for a labor listing |
| POST | `/match/workspace` | Find matches for a workspace |
| POST | `/recommend/price` | Get a price recommendation |
