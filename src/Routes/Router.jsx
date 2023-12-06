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
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllDonation from "../Pages/Dashboard/AllDonation/AllDonation";
import User from "../Pages/Dashboard/User/User";
import DashboardError from "../Pages/Dashboard/DashboardError/DashboardError";
import DonationCampaign from "../DonationCampaign/DonationCampaign";
import DonationDetails from "../DonationCampaign/donationDetails";
import CreateDonation from "../DonationCampaign/CreateDonation";
import MyDonationCampaigns from "../DonationCampaign/Donation/myDonationCampaigns";
import MyDonation from "../DonationCampaign/Donation/myDonation";
import AdoptionRequest from "../Pages/Adoption/AdoptionRequest";
import MyAddedPets from "../Pages/Pets/MyAddedPets/MyAddedPets";

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
        path: "/allPet",
        element: <PrivateRoute><AllPet></AllPet></PrivateRoute>
      },
      {
        path: "/donation",
        element: <DonationCampaign></DonationCampaign>
      },
      {
        path: "/petDetails/:id",
        element: <PrivateRoute><PetDetails></PetDetails></PrivateRoute>,
        loader:({ params }) => fetch(`https://pet-shop-server-neon.vercel.app/pets/${params.id}`)
      },
      {
        path: "/donationDetails/:id",
        element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
        loader:({ params }) => fetch(`https://pet-shop-server-neon.vercel.app/donations/${params.id}`)
      },
    ]
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <DashboardError></DashboardError>,
    children: [
      {
        path: "user",
        element:<User></User>
      },
      {
        path: "addPet",
        element:<AddPets></AddPets>
      },
      {
        path: "allPet",
        element:<AllPet></AllPet>
      },
      {
        path: "allDonation",
        element:<AllDonation></AllDonation>
      },
      {
        path: "createDonation",
        element:<CreateDonation></CreateDonation>
      },
      {
        path: "donation",
        element: <DonationCampaign></DonationCampaign>
      },
      {
        path: "myDonationCampaigns",
        element: <MyDonationCampaigns></MyDonationCampaigns>
      },
      {
        path: "myDonations",
        element: <MyDonation></MyDonation>
      },
      {
        path: "adoptionRequest",
        element: <AdoptionRequest></AdoptionRequest>
      },
      {
        path: "myAddedPets",
        element: <MyAddedPets></MyAddedPets>
      },
    ]
  },
]);

export default Router;