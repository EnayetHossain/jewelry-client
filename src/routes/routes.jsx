import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
        element: (
          <PrivateRoute>
            <AllJewelry></AllJewelry>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/jewelry"),
      },

      {
        path: "sign-up",
        element: <SignUp></SignUp>,
      },

      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);
