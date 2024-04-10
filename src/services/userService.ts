import { User, CreateUser } from "@/types/userType";
import { api } from "@/lib/api";

async function createUser(
  user: CreateUser,
): Promise<User | null> {
  try {
    const response = await api.post<User>("/user", user);
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export const userService = {
  create: createUser,
};
