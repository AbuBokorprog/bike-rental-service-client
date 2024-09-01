import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Error from "../pages/Error";
import Home from "../pages/Home";

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
    ],
  },
]);
