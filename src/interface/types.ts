//Shop interface

export interface Slider {
  id: number;
  img: string;
  title: string;
  desc: string;
  bg: string;
}

export interface Category {
  id: number;
  img: string;
  title: string;
}

export interface Product {
  id: number;
  img: string;
  price: number;
  size: "S" | "M" | "L" | "XL";
}

// Auth interface

export interface AuthState {
  user: User | undefined;
  authenticated: boolean;
}

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

//Cart  interface

export interface Summary {
  product: Product;
  quantity: number;
  total: number;
}

export interface CartState {
  cart: Summary[] | [];
  totals: number;
}
