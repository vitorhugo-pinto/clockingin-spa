import { User, CreateUser } from "@/types/userType";
import { api } from "@/lib/api";

async function createUser(
  user: CreateUser,
): Promise<User> {
  const response = await api.post<User>("/user", user);
  return response.data;
}

export const userService = {
  create: createUser,
};
