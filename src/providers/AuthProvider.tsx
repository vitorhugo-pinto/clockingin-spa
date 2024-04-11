import axios from "axios";
import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

type AuthContextProviderProps = {
  children?: ReactNode | undefined;
};

type AuthContextType = {
  token: string | null;
  role: string | null;
  jobType: string | null;
  clearAll: () => void;
  setToken: (token: string | null) => void;
};

type tokenType = {
  jobType: string;
  roles: string[];
} & JwtPayload;

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  let roleFromToken: string | null;
  let jobTypeFromToken: string | null;
  if (token != null) {
    roleFromToken = jwtDecode<tokenType>(token ?? "").roles[0];
    jobTypeFromToken = jwtDecode<tokenType>(token ?? "").jobType;
  } else {
    roleFromToken = null;
    jobTypeFromToken = null;
  }

  const [role, setRole] = useState(roleFromToken);
  const [jobType, setJobType] = useState(jobTypeFromToken);

  const setToken = (newToken: string | null) => {
    setToken_(newToken);
    if (newToken) {
      const tokenRole = jwtDecode<tokenType>(newToken).roles[0];
      const tokenJobType = jwtDecode<tokenType>(newToken).jobType;
      setRole(tokenRole);
      setJobType(tokenJobType);
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
      jobType,
      clearAll,
      setToken,
    }),
    [token, role]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
