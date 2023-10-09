import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import JewelryRow from "../JewelryRow/JewelryRow";
import "./MyJewelry.css";

const MyJewelry = () => {
  const [jewelry, setJewelry] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/my-jewelry?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJewelry(data));
  }, [user]);

  console.log(jewelry);

  return (
    <section className="my-jewelry-section desktop-max">
      {jewelry.map((jewel) => (
        <JewelryRow key={jewel._id} jewel={jewel}></JewelryRow>
      ))}
    </section>
  );
};

export default MyJewelry;
