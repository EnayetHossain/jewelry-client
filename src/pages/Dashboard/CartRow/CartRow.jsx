/* eslint-disable react/prop-types */
import { BsTrashFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "./CartRow.css";

const CartRow = ({ cart }) => {
  const { _id, picture, title, price } = cart;

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure?");
    if (proceed) {
      console.log(id);
      fetch(`https://jewellery-server.vercel.app/carts/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.info("Your item has been deleted");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="jewelry-row user-row">
      <div className="jewelry-image user-img">
        <img src={picture} alt="Jewelry" />
      </div>

      <div className="jewelry-title">
        <p>{title}</p>
      </div>

      <div className="jewelry-price">
        <p>{price}</p>
      </div>

      <div className="jewelry-buttons">
        <button
          className="cta user-cta user-btn"
          title="delete"
          onClick={() => handleDelete(_id)}
        >
          <BsTrashFill></BsTrashFill>
        </button>
      </div>
    </div>
  );
};

export default CartRow;
