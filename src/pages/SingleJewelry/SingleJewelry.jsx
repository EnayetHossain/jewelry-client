import { useLoaderData } from "react-router-dom";
import "./SingleJewelry.css";

const SingleJewelry = () => {
  const jewelry = useLoaderData();
  const { title, picture, description, price, email } = jewelry;

  return (
    <section className="single-jewelry-section desktop-max">
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

        <button className="cta">Add to cart</button>
      </div>
    </section>
  );
};

export default SingleJewelry;
