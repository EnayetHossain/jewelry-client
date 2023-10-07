import { Link } from "react-router-dom";
import bandImage from "../../../assets/band.jpg";
import "./Band.css";

const Band = () => {
  return (
    <section className="hero-section band-section desktop-max">
      <div className="band-image">
        <img src={bandImage} alt="hero" />
      </div>

      <div className="hero-content band-content">
        <h1 className="hero-title band-title">womans band</h1>
        <p className="hero-description band-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          natus soluta officiis deleniti perferendis modi et dicta sunt,
          dignissimos ratione voluptatibus blanditiis sapiente, quia eveniet
          optio fuga ducimus minus voluptates!
        </p>
        <Link to={"/"} className="cta">
          Explore
        </Link>
      </div>
    </section>
  );
};

export default Band;
