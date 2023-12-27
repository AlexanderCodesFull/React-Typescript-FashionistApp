import { useContext } from "react";
import { CartContext } from "../context/cart/CartContext";

export const useCart = () => {
  const cart = useContext(CartContext);
  if (!cart) throw Error("Not Context Allowed");
  else return cart;
};
