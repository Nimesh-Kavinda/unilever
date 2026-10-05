export interface Product {
  id: number;
  name: string;
  systemName: string;
  mrp: number;
  image: string;
  category?: string;
  size?: string;
}