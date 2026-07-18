from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import the router from your nested directory
from routers.vector import router as vector_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register the routes
app.include_router(vector_router)