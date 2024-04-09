import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";

export const Logout = () => {
  const { clearAll } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAll();
    navigate("/login", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return <>Logout Page</>;
};
