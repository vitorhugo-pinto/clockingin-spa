import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { LoginPage } from "./pages/loginPage";
import { AdminPage } from "./pages/adminPage";
import { EmployeePage } from "./pages/employeePage";
import { ErrorPage } from "./pages/errorPage";
import { ProtectedRoute } from "./pages/protectedRoute";
import { Logout } from "./pages/logoutPage";

export const Routes = () => {
  const publicRoutes: RouteObject[] = [
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
  ];

  const protectedRoutes: RouteObject[] = [
    {
      path: "/",
      element: <ProtectedRoute />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/admin/create-user",
          element: <AdminPage />,
        },
        {
          path: "/employee",
          element: <EmployeePage />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];
  const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);

  return <RouterProvider router={router} />;
};
