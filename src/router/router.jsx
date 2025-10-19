import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path:"/auth/login",
        element: <Login></Login>,
      },
      {
        path:"/auth/register",
        element: <Register></Register>,
      },
    ],
  },
{
  path: "/news-details/:id",
  element: (
    <PrivateRoute>
    <NewsDetails></NewsDetails>
    </PrivateRoute>
  ),
  loader: () => fetch("/news.json")

},
  {
    path: "/*",
    element: <h2>Erroe 404</h2>,
  },
]);
export default router;
