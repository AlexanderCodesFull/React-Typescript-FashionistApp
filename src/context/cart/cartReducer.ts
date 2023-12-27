import { CartState } from "@interface";
import { cartType } from "./actions";

export const cartReducer = (state: CartState, action: cartType): CartState => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: action.payload,
      };

    case "CHANGE_QUANTITY":
      return { ...state };

    default:
      return state;
  }
};
