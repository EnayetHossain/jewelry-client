import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  // delete the item
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      console.log(id);
      fetch(`http://localhost:5000/jewelry/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remaining = jewelry.filter((jewel) => jewel._id !== id);
            setJewelry(remaining);
            toast.info("Your class has been deleted");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <section className="my-jewelry-section desktop-max">
      {jewelry.map((jewel) => (
        <JewelryRow
          key={jewel._id}
          jewel={jewel}
          handleDelete={handleDelete}
        ></JewelryRow>
      ))}
    </section>
  );
};

export default MyJewelry;
