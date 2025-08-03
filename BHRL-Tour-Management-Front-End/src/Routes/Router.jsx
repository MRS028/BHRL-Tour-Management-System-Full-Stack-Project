import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import MainLayout from "../Components/MainLayout/MainLayout";
import AboutPage from "../Components/Pages/AboutPage";

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
        element: <AboutPage/>,
      },
    ]
  },
  {
    path: "/*",
    element: <div>404</div>,
  },
]);
export default Router;

