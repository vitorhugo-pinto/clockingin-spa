import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { AdminPage } from "./pages/adminPage";
import { EmployeePage } from "./pages/employeePage";
import { ErrorPage } from "./pages/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/admin/create-user",
        element: <AdminPage />,
      },
      {
        path: "/employee",
        element: <EmployeePage />,
      },
    ],
  },
]);
