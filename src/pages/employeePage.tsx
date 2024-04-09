import { useAuth } from "@/providers/AuthUseContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function EmployeePage() {
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
}
