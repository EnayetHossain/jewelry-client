import { useLoaderData } from "react-router-dom";
import JewelryRow from "../JewelryRow/JewelryRow";
import "./AllJewelry.css";

const AllJewelry = () => {
  const jewelry = useLoaderData();
  console.log(jewelry);

  return (
    <section className="jewelry-section desktop-max">
      <div className="jewelry-row-heading">
        <div className="jewelry-heading">
          <p>Image</p>
        </div>

        <div className="jewelry-heading">
          <p>Title</p>
        </div>

        <div className="jewelry-heading">
          <p>Options</p>
        </div>
      </div>

      {jewelry.map((jewel) => (
        <JewelryRow key={jewel._id} jewel={jewel}></JewelryRow>
      ))}
    </section>
  );
};

export default AllJewelry;
