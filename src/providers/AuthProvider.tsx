import axios from "axios";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
};

type AuthContextType = {
  token: string | null;
  role: string | null;
  clearAll: () => void;
  setToken: (token: string | null) => void;
};

type tokenType = {
  roles: string[];
} & JwtPayload;

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  let roleFromToken: string | null;
  if (token != null) {
    roleFromToken = jwtDecode<tokenType>(token ?? "").roles[0];
  } else {
    roleFromToken = null;
  }

  const [role, setRole] = useState(roleFromToken);

  const setToken = (newToken: string | null) => {
    setToken_(newToken);
    if (newToken) {
      const token = jwtDecode<tokenType>(newToken).roles[0];
      setRole(token);
    }
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const clearAll = () => {
    setToken(null);
    setRole(null);
  };

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      role,
      clearAll,
      setToken,
    }),
    [token, role]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
