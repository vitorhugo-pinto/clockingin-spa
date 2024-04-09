export type User = {
  id: string;
  name: string;
  login: string;
  password: string;
  role: string;
  jobType: string;
  createdAt: Date;
}

export type CreateUser = Omit<User, "id" | "createdAt">