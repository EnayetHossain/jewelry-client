/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useRole from "../../../Hooks/useRole";
import { AuthContext } from "../../../Provider/AuthProvider";
import CartRow from "../CartRow/CartRow";
import UserRow from "../UserRow/UserRow";
import "./MainContent.css";

const MainContent = () => {
  const [carts, setCarts] = useState([]);
  // const [users, setUsers] = useState([]);
  console.log(carts);

  const users = useLoaderData();
  const role = useRole();
  console.log(role);
  const { user } = useContext(AuthContext);
  console.log(user.email);

  useEffect(() => {
    fetch(`https://jewellery-server.vercel.app/carts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      })
      .catch((err) => console.log(err));
  }, [user]);

  // useEffect(() => {
  //   fetch("https://jewellery-server.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="analytics">
      <ToastContainer />

      {role === "owner"
        ? users.map((user) => <UserRow key={user._id} user={user}></UserRow>)
        : carts.map((cart) => <CartRow key={cart._id} cart={cart}></CartRow>)}
    </div>
  );
};

export default MainContent;
