import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayout from "../Components/MainLayout/MainLayout";
import AboutPage from "../Components/Pages/AboutPage";
import CommunityPage from "../Components/Pages/CommunityPage";
import TourPage from "../Components/Pages/Tourpage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ContactPage from "../Components/Pages/ContactPage";
import LoginPage from "../Components/Login and Register/LoginPage";
import RegisterPage from "../Components/Login and Register/Register";
import AdminDashboard from "../Dashboard/AdninDashboard/AdminDashboard";
import AuthLayout from "../Components/Login and Register/AuthLayout";
import BookingForm from "@/Components/BookingData/BookingForm/BookingForm";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutus",
        element: <AboutPage />,
      },
      {
        path: "/tours",
        element: <TourPage />,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "",
        element: <AuthLayout />,
        children: [
          {
            path: "auth/login",
            element: <LoginPage />,
          },
          {
            path: "/auth/register",
            element: <RegisterPage />,
          },
        ],
      },
      {
        path: "/bookingtour",
        element: <PrivateRoute><BookingForm/></PrivateRoute>
      }
    ],
  },

  {
    path: "/dashboard/admindashboard",
    element: <AdminDashboard />,
    children: [
      {
        path: "/dashboard/admindashboard",
        element: <div>p</div>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
export default Router;
