// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "@/components/ui/input";
// import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";

export function LoginPage() {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    setToken(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ2aHAxIiwiam9iVHlwZSI6IkZVTExUSU1FIiwicm9sZXMiOlsiUk9MRV9FTVBMT1lFRSJdLCJzdWIiOiJmNzc5NjIyMy01MTljLTRkYWEtOTZlMi1iYWIzOTlhMjVkMjciLCJleHAiOjE3MTI2ODI3NDF9.7MBJ6Ifvx5pSKdCc65j0TTM-R0u7srXtIxzJPlZvs_8"
    );
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogin();
  }, 3 * 1000);
  return (
    <h1>Login Page</h1>
    // <main className="bg-slate-300 w-full h-screen py-8">
    //   <Card className="w-1/4 h-fit mx-auto">
    //     <CardHeader>
    //       <CardTitle className="flex gap-2">
    //         <Clock className="size-6 text-emerald-500" />
    //         Clocking in
    //       </CardTitle>
    //       <CardDescription>Have a nice work day</CardDescription>
    //     </CardHeader>
    //     <CardContent>
    //       <form className="flex flex-col gap-4">
    //         <Label htmlFor="login">Login</Label>
    //         <Input id="login" type="text" placeholder="Insert login" />
    //         <Label htmlFor="password">Password</Label>
    //         <Input
    //           id="password"
    //           type="password"
    //           placeholder="Insert password"
    //         />
    //       </form>
    //     </CardContent>
    //     <CardFooter className=" justify-end">
    //       <Button type="submit" className="min-w-28">
    //         Log in
    //       </Button>
    //     </CardFooter>
    //   </Card>
    // </main>
  );
}
