// constants/data.ts
import { CoffeeShop, WordNode, TabConfig } from './types';

export const TABS: TabConfig[] = [
  { id: 1, name: "1D: Price", color: "text-rose-400", filename: "vector_space_1d.py" },
  { id: 2, name: "2D: Price & Distance", color: "text-purple-400", filename: "vector_space_2d.py" },
  { id: 4, name: "Static: D3 Clusters", color: "text-amber-400", filename: "static_d3_clusters.ts" },
  { id: 3, name: "3D: Telemetry Matrix", color: "text-cyan-400", filename: "telemetry_tensor_3d.py" }
];

export const COFFEE_SHOPS: CoffeeShop[] = [
  { name: "Street Cart", price: 10, dist: 15, color: "bg-blue-400", shadow: "shadow-blue-500/50" },
  { name: "Local Diner", price: 35, dist: 80, color: "bg-emerald-400", shadow: "shadow-emerald-500/50" },
  { name: "Chain Cafe", price: 65, dist: 40, color: "bg-yellow-400", shadow: "shadow-yellow-500/50" },
  { name: "Luxury Brew", price: 90, dist: 10, color: "bg-rose-400", shadow: "shadow-rose-500/50" },
  { name: "Campus Kiosk", price: 20, dist: 90, color: "bg-purple-400", shadow: "shadow-purple-500/50" },
];

export const D3_DATASET: WordNode[] = [
  { word: "Cat", x: 15, y: 85, group: "animal", color: "#fb7185" },
  { word: "Dog", x: 20, y: 80, group: "animal", color: "#fb7185" },
  { word: "Wolf", x: 10, y: 90, group: "animal", color: "#fb7185" },
  { word: "Sedan", x: 85, y: 15, group: "vehicle", color: "#38bdf8" },
  { word: "Truck", x: 90, y: 10, group: "vehicle", color: "#38bdf8" },
  { word: "Bus", x: 80, y: 20, group: "vehicle", color: "#38bdf8" },
  { word: "Apple", x: 80, y: 80, group: "food", color: "#34d399" },
  { word: "Banana", x: 85, y: 85, group: "food", color: "#34d399" },
  { word: "Bread", x: 75, y: 75, group: "food", color: "#34d399" },
];