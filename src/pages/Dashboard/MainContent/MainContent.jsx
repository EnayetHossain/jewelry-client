import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import UserRow from "../UserRow/UserRow";
import "./MainContent.css";

const MainContent = () => {
  const users = useLoaderData();

  return (
    <div className="analytics">
      <ToastContainer />

      {users.map((user) => (
        <UserRow key={user._id} user={user}></UserRow>
      ))}
    </div>
  );
};

export default MainContent;
