import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";
import AllBikes from "../pages/bikes/AllBikes";
import BikeDetails from "../pages/bikes/BikeDetails";
import CategoriesBikes from "../pages/bikes/CategoriesBikes";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <AllBikes />,
      },
      {
        path: "/bikes/:slug",
        element: <BikeDetails />,
      },
      {
        path: "/bikes/category/:slug",
        element: <CategoriesBikes />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
