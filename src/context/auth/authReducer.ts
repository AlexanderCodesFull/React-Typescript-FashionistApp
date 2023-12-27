import { AuthState } from "@interface";
import { authType } from "./actions";

export const authReducer = (state: AuthState, action: authType): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return { ...state };

    case "CREATE_ACCOUNT":
      return { ...state };

    default:
      return state;
  }
};
