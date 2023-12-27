import { ReactNode, useReducer } from "react";
import { CartContext } from "./CartContext";
import { CartState, Product, Summary } from "@interface";
import { cartReducer } from "./cartReducer";

interface Props {
  children: ReactNode | ReactNode[];
}

const CART_STATE: CartState = {
  cart: [],
  totals: 0,
};

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, CART_STATE);
  const { cart } = state;

  const addCart = async (prod: Product): Promise<boolean> => {
    let data: Summary[] | [] = [];
    const valid = cart.find((el) => el.product.id == prod.id && el);
    if (!valid) data = [...cart, { product: prod, quantity: 1, total: 0 }];
    else
      data = cart.map((el) =>
        el.product.id === prod.id
          ? {
              ...el,
              quantity: el.quantity < 10 ? el.quantity + 1 : el.quantity,
            }
          : el
      );

    dispatch({ type: "ADD_PRODUCT_TO_CART", payload: data });
    return true;
  };

  const changeQuantity = (val: number, prod: Product) => {
    const data = cart.map((el) =>
      el.product.id === prod.id
        ? {
            ...el,
            quantity:
              val === 1
                ? el.quantity < 10
                  ? el.quantity++
                  : el.quantity
                : el.quantity > 1
                ? el.quantity--
                : el.quantity,
          }
        : el
    );
    dispatch({ type: "CHANGE_QUANTITY", payload: data });
  };

  return (
    <CartContext.Provider value={{ ...state, addCart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
