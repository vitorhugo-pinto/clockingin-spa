import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";
import { api } from "@/lib/api";

import { useForm, SubmitHandler } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

type LoginType = {
  login: string;
  password: string;
};

export function LoginPage() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { clearAll } = useAuth();

  useEffect(() => {
    clearAll();
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = (data) => {
    handleLogin(data);
  };

  const handleLogin = (data: LoginType) => {
    api.post("/authenticate", data).then((response) => {
      if (response.status === 200) {
        setToken(response.data.data.token);
        navigate("/admin/create-user", { replace: true });
      }
    });
  };

  return (
    <main className="bg-slate-300 w-full h-screen py-8">
      <Card className="w-1/4 h-fit mx-auto">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <Clock className="size-6 text-emerald-500" />
            Clocking in
          </CardTitle>
          <CardDescription>Have a nice work day</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Label htmlFor="login">Login</Label>
            <Input
              {...register("login")}
              id="login"
              type="text"
              placeholder="Insert login"
              className={cn({ "border-red-500": !!errors.login })}
            />
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="Insert password"
              className={cn({ "border-red-500": !!errors.password })}
            />

            <Button type="submit" className="min-w-28">
              Log in
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
