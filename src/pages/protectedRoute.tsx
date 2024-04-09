import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";

export function ProtectedRoute() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
