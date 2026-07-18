// types/index.ts
export interface CoffeeShop {
  name: string;
  price: number;
  dist?: number; // Optional for 1D
  color: string;
  shadow: string;
}

export interface WordNode {
  word: string;
  x: number;
  y: number;
  group: string;
  color: string;
}

export interface TabConfig {
  id: number;
  name: string;
  color: string;
  filename: string;
}