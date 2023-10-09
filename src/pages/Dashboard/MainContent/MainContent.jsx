import { useLoaderData } from "react-router-dom";
import UserRow from "../UserRow/UserRow";
import "./MainContent.css";

const MainContent = () => {
  const users = useLoaderData();
  console.log(users);

  return (
    <div className="analytics">
      {users.map((user) => (
        <UserRow key={user._id} user={user}></UserRow>
      ))}
    </div>
  );
};

export default MainContent;
