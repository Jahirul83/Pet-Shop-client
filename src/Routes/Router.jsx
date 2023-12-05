import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "./ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Profile from "../Pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
    ]
  },
]);

export default Router;