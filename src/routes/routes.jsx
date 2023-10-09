import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import AddJewelry from "../pages/AddJewelry/AddJewelry";
import AllJewelry from "../pages/AllJewelry/AllJewelry";
import MainContent from "../pages/Dashboard/MainContent/MainContent";
import SingleCart from "../pages/Dashboard/SingleCart/SingleCart";
import UserDetails from "../pages/Dashboard/UserDetails/UserDetails";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import MyJewelry from "../pages/MyJewelry/MyJewelry";
import SignUp from "../pages/SignUp/SignUp";
import SingleJewelry from "../pages/SingleJewelry/SingleJewelry";
import UpdateJewelry from "../pages/UpdateJewelry/UpdateJewelry";
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
        loader: () => fetch("https://jewellery-server.vercel.app/jewelry"),
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

      {
        path: "/jewelry/:id",
        element: (
          <PrivateRoute>
            <SingleJewelry></SingleJewelry>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jewellery-server.vercel.app/jewelry/${params.id}`),
      },

      {
        path: "/update-jewelry/:id",
        element: <UpdateJewelry></UpdateJewelry>,
        loader: ({ params }) =>
          fetch(`https://jewellery-server.vercel.app/jewelry/${params.id}`),
      },
    ],
  },

  // dash board layout
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MainContent></MainContent>,
        loader: () => fetch("https://jewellery-server.vercel.app/users"),
      },

      {
        path: "/dashboard/:id",
        element: (
          <PrivateRoute>
            <UserDetails></UserDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jewellery-server.vercel.app/users/${params.id}`),
      },

      {
        path: "dashboard/cart/:id",
        element: (
          <PrivateRoute>
            <SingleCart></SingleCart>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
