import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import "./UserRow.css";

/* eslint-disable react/prop-types */
const UserRow = ({ user }) => {
  const { _id, photo, name, role } = user;

  return (
    <div className="jewelry-row user-row">
      <div className="jewelry-image user-img">
        <img src={photo} alt="Jewelry" />
      </div>

      <div className="jewelry-title">
        <p>{name}</p>
      </div>

      <div className="jewelry-price">
        <p>{role}</p>
      </div>

      <div className="jewelry-buttons">
        <Link
          className="cta user-cta"
          title="View details"
          to={`/dashboard/${_id}`}
        >
          <TbListDetails></TbListDetails>
        </Link>
      </div>
    </div>
  );
};

export default UserRow;
