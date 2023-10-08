import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import Home from "../pages/Home/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/all-jewelry",
        element: <AllJewelry></AllJewelry>,
        loader: () => fetch("http://localhost:5000/jewelry"),
      },
    ],
  },
]);
