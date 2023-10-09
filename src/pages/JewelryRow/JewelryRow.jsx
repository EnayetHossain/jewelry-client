/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./JewelryRow.css";

const JewelryRow = ({ jewel }) => {
  const { _id, title, picture, price } = jewel;

  return (
    <div className="jewelry-row">
      <div className="jewelry-image">
        <img src={picture} alt="Jewelry" />
      </div>

      <div className="jewelry-title">
        <p>{title}</p>
      </div>

      <div className="jewelry-price">
        <p>{price}</p>
      </div>

      <div className="jewelry-buttons">
        <Link className="cta" to={`/jewelry/${_id}`}>
          View details
        </Link>
      </div>
    </div>
  );
};

export default JewelryRow;
