import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";
import { Button } from "@/components/ui/button";

export const Logout = () => {
  const { clearAll } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAll();
    navigate("/login", { replace: true });
  };

  return (
    <Button onClick={handleLogout} type="submit" className="min-w-28">
      Logout
    </Button>
  );
};
