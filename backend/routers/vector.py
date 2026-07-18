from fastapi import APIRouter
from src.vector.demos.embedding.vectors import router as embedding_router

router = APIRouter()

# Include all the demos/endpoints related to vectors here
router.include_router(embedding_router)
