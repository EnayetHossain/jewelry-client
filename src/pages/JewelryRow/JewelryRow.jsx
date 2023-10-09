/* eslint-disable react/prop-types */
import { BsFillTrashFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import "./JewelryRow.css";

const JewelryRow = ({ jewel, handleDelete }) => {
  const { _id, title, picture, price } = jewel;
  const location = useLocation();
  const form = location.pathname === "/my-jewelry" ? true : false;

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
        <Link className="cta" title="View details" to={`/jewelry/${_id}`}>
          <TbListDetails></TbListDetails>
        </Link>

        {form && (
          <>
            <Link className="cta" title="Update" to={`/update-jewelry/${_id}`}>
              <MdTipsAndUpdates></MdTipsAndUpdates>
            </Link>
            <button
              className="btn delete-btn"
              title="Delete"
              onClick={() => handleDelete(_id)}
            >
              <BsFillTrashFill></BsFillTrashFill>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default JewelryRow;
