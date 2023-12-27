import { ReactNode, useReducer } from "react";
import { authReducer } from "./authReducer";
import { AuthState, Login, User } from "@interface";
import { AuthContext } from "./AuthContext";

interface Props {
  children: ReactNode | ReactNode[];
}

const AUTH_STATE: AuthState = {
  user: undefined,
  authenticated: false,
};

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_STATE);

  const login = async ({ email, password }: Login): Promise<boolean> => {
    try {
      dispatch({ type: "LOGIN" });
      console.log(email, password);
      return true;
    } catch (error) {
      return false;
    }
  };

  const createAccount = async (user: User): Promise<boolean> => {
    try {
      dispatch({ type: "CREATE_ACCOUNT" });
      console.log(user);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, createAccount }}>
      {children}
    </AuthContext.Provider>
  );
};
