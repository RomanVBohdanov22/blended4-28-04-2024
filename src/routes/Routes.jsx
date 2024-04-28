import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { Contacts } from "../components/Contacts";

const Routes = () => {
  const publicRoutes = [
    { path: "/home", element: <h1>Public Homepage!</h1> },
    {
      path: "/login",
      element: <Login />,
    },
  ];
  const privateRoutes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [{ path: "/contacts", element: <Contacts /> }],
    },
  ];
  const router = createBrowserRouter([...publicRoutes, ...privateRoutes]);
  return <RouterProvider router={router} />;
};

export default Routes;
