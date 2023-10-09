import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
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
        element: <AllJewelry></AllJewelry>,
        loader: () => fetch("http://localhost:5000/jewelry"),
      },

      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/add-jewelry",
        element: (
          <PrivateRoute>
            <AddJewelry></AddJewelry>
          </PrivateRoute>
        ),
      },

      {
        path: "/my-jewelry",
        element: (
          <PrivateRoute>
            <MyJewelry></MyJewelry>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
