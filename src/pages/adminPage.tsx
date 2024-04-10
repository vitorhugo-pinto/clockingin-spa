import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthUseContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useCreateUser } from "@/hooks/useUsers";

export function AdminPage() {
  const { clearAll, role, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!!token && role !== "ROLE_ADMIN") {
      navigate("/employee");
    }
  });

  const { mutate, isPending } = useCreateUser();

  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    login: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    role: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    jobType: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      login: "",
      password: "",
      role: "",
      jobType: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(
      {
        name: data.name,
        login: data.login,
        password: data.password,
        role: data.role,
        jobType: data.jobType,
      },
      {
        onSuccess: () => {
          form.reset();
          navigate("/admin/create-user");
        },
      }
    );
  }

  const handleLogout = () => {
    clearAll();
    navigate("/login", { replace: true });
  };

  return (
    <main className="bg-slate-300 w-full h-full py-8">
      <Card className="w-1/4 h-fit mx-auto">
        <CardHeader>
          <CardTitle className="flex gap-2">
            <Clock className="size-6 text-emerald-500" />
            Clocking in
          </CardTitle>
          <CardDescription>Create a new user</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert name" {...field} />
                    </FormControl>
                    <FormDescription>User full name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Login</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert login" {...field} />
                    </FormControl>
                    <FormDescription>
                      User login into the system
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Insert user password" {...field} />
                    </FormControl>
                    <FormDescription>
                      User password to access the system
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role for the user" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="ADMIN">Admin</SelectItem>
                        <SelectItem value="EMPLOYEE">Employee</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select a rola for the user. This will change what feature
                      the user will be able to use.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a job type for the user" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FULLTIME">
                          8 hours/day journey
                        </SelectItem>
                        <SelectItem value="PARTTIME">
                          6 hours/day journey
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Select a rola for the user. This will change what feature
                      the user will be able to use.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="min-w-28">
                {!isPending ? (
                  <>Create user</>
                ) : (
                  <Loader className="size-5 animate-ping" />
                )}
              </Button>
              <Button
                onClick={handleLogout}
                type="submit"
                className="min-w-28 bg-red-600"
              >
                Logout
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
