import { AuthState, Login, User } from "@interface";
import { createContext } from "react";

interface ContextProps extends AuthState {
  login: (login: Login) => Promise<boolean>;
  createAccount: (user: User) => Promise<boolean>;
}

export const AuthContext = createContext({} as ContextProps);
