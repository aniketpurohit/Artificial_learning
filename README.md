# Artificial Learning

A full-stack project dedicated to exploring and visualising Machine Learning concepts, structured around distinct mathematical and conceptual domains.

## Directory Structure

```
├── backend/
│   ├── main.py                     # FastAPI application entry point
│   ├── routers/
│   │   └── vector.py               # Aggregated routes for the Vector domain
│   └── src/
│       ├── core/                   # Shared backend utilities and database configurations
│       └── vector/                 # Vector domain core modules
│           └── demos/
│               └── embedding/      # Backend endpoints for the embedding demo
│
├── frontend/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root Next.js layout (includes navigation bar)
│   │   ├── page.tsx                # Splash/Main landing page
│   │   └── vector/                 # Vector domain sub-pages
│   │       ├── page.tsx            # Vector Hub dashboard (list of demos)
│   │       └── demos/
│   │           └── embedding/      # Embedding demo page
│   └── src/
│       ├── core/                   # Shared UI components and configurations
│       └── vector/                 # Domain-specific components
│           ├── constants.ts
│           ├── types.ts
│           └── demos/
│               └── embedding/      # Components & Canvas visualizations for embedding
│
└── Math_And_Ml_foundation/         # Markdown documentation regarding ML foundations
```

## Adding a New Domain

1. **Backend**:
   - Create a module inside `backend/src/<domain_name>`.
   - Register endpoints in a router under `backend/routers/<domain_name>.py`.
   - Include the new router in `backend/main.py`.

2. **Frontend**:
   - Create a corresponding page inside `frontend/app/<domain_name>/page.tsx` as a hub page.
   - Build domain-specific UI components and sub-modules inside `frontend/src/<domain_name>`.

## Adding a New Demo

To add a new demo to an existing domain (e.g., `tensor` or `vector`):

1. **Backend**:
   - Create the demo endpoints in `backend/src/<domain>/demos/<demo_name>/`.
   - Include those endpoints in the domain's router (`backend/routers/<domain>.py`).

2. **Frontend**:
   - Place the React components in `frontend/src/<domain>/demos/<demo_name>/`.
   - Create the route at `frontend/app/<domain>/demos/<demo_name>/page.tsx`.
   - Add a navigation card to the domain hub page (`frontend/app/<domain>/page.tsx`).