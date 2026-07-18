from fastapi import APIRouter
from pydantic import BaseModel
import numpy as np

router = APIRouter(
    prefix="/api/v1",
    tags=["vectors"]
)

# --- 1D Model (Price only) ---
class CoffeeShop1D(BaseModel):
    price: float

@router.post("/vectorize/1d")
async def vectorize_1d(metrics: CoffeeShop1D):
    raw_vector = np.array([metrics.price])
    max_values = np.array([100.0]) # Assuming max price is $100
    normalized = raw_vector / max_values
    
    return {"vector": normalized.tolist(), "dimensions": 1}

# --- 2D Model (Price & Distance) ---
class CoffeeShop2D(BaseModel):
    price: float
    distance: float

@router.post("/vectorize/2d")
async def vectorize_2d(metrics: CoffeeShop2D):
    raw_vector = np.array([metrics.price, metrics.distance])
    # Assuming max price is $100, max distance is 100 mins
    max_values = np.array([100.0, 100.0]) 
    normalized = raw_vector / max_values
    
    return {"vector": normalized.tolist(), "dimensions": 2}

# --- 3D Model (System Telemetry - Demo 3) ---
class SystemMetrics3D(BaseModel):
    cpu: float
    ram: float
    disk: float

# Keeping the original route path so your frontend Demo 3 doesn't break
@router.post("/vectorize")
async def vectorize_3d(metrics: SystemMetrics3D):
    raw_vector = np.array([metrics.cpu, metrics.ram, metrics.disk])
    max_values = np.array([100.0, 100.0, 100.0])
    normalized = raw_vector / max_values
    
    return {"vector": normalized.tolist(), "dimensions": 3}
