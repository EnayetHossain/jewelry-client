import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import "./SingleJewelry.css";

const SingleJewelry = () => {
  const jewelry = useLoaderData();
  const { _id, title, picture, description, price, email } = jewelry;
  const { user } = useContext(AuthContext);

  const handleCart = (id) => {
    const cartDetails = {
      product_id: id,
      title,
      picture,
      description,
      price,
      email: user.email, // user email
    };

    fetch("https://jewellery-server.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Item added to you cart");
        }
        toast.warn(data.message);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <section className="single-jewelry-section desktop-max">
      <ToastContainer />
      <div className="details-image">
        <img src={picture} alt={title} />
      </div>

      <div className="details-description">
        <div>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>

        <div className="price">
          <p>Price: ${price}</p>
          <p>Contact Seller: {email}</p>
        </div>

        <button className="btn cart-btn" onClick={() => handleCart(_id)}>
          Add to cart
        </button>
      </div>
    </section>
  );
};

export default SingleJewelry;
