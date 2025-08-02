import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <div>About Page</div>,
  },
]);
export default Router;

