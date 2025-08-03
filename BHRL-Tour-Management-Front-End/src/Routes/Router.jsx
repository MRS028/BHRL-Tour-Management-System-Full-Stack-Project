import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayout from "../Components/MainLayout/MainLayout";
import AboutPage from "../Components/Pages/AboutPage";
import CommunityPage from "../Components/Pages/CommunityPage";
import TourPage from "../Components/Pages/Tourpage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ContactPage from "../Components/Pages/ContactPage";

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
    ],
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);
export default Router;
