import { Summary } from "@interface";

export interface ActionCart {
  [x: string]: string;
}

export type AC = "ADD_PRODUCT" | "DELETE_TO_CART";

export type cartType =
  | { type: "ADD_PRODUCT_TO_CART"; payload: Summary[] | [] }
  | { type: "DELETE_PRODUCT_TO_CART" }
  | { type: "CLEAR_PRODUCT_TO_CART" }
  | { type: "CHANGE_QUANTITY"; payload: Summary[] | [] };
