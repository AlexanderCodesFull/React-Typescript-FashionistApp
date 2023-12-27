import { useContext } from "react";
import { AuthContext } from "src/context/auth/AuthContext";

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
