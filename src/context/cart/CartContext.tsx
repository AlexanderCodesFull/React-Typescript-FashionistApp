import { CartState, Product } from "@interface";
import { createContext } from "react";

interface ContextProps extends CartState {
  addCart: (prod: Product) => Promise<boolean>;
  changeQuantity: (val: number, prod: Product) => void;
}

export const CartContext = createContext({} as ContextProps);
