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
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AddPets from "../Pages/Pets/AddPets";
import AllPet from "../Pages/Pets/AllPet";
import PetDetails from "../Pages/Pets/PetDetails";

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
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contacts",
        element: <Contact></Contact>
      },
      {
        path: "/addPet",
        element: <AddPets></AddPets>
      },
      {
        path: "/allPet",
        element: <PrivateRoute><AllPet></AllPet></PrivateRoute>
      },
      {
        path: "/petDetails/:id",
        element: <PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
        loader:({ params }) => fetch(`https://pet-shop-server-neon.vercel.app/pets/${params.id}`)
      },
    ]
  },
]);

export default Router;