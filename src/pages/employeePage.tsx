import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function EmployeePage() {
  const { clearAll, token, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token && role !== "ROLE_EMPLOYEE") {
      navigate("/admin/create-user");
    }
  });

  const handleLogout = () => {
    clearAll();
    navigate("/login", { replace: true });
  };

  return (
    <Card className="w-1/4 h-fit mx-auto">
      <CardHeader>
        <CardTitle className="flex gap-2">
          <Clock className="size-6 text-emerald-500" />
          Clocking in
        </CardTitle>
        <CardDescription>Create a new user</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleLogout}
          type="submit"
          className="min-w-28 bg-red-600"
        >
          Logout
        </Button>
      </CardContent>
    </Card>
  );
}
