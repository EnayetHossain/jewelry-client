import { Link } from "react-router-dom";
import heroImage from "../../../assets/hero.png";
import "./Banner.css";

const Banner = () => {
  console.log(import.meta.env.VITE_apiKey);
  return (
    <section className="hero-section desktop-max">
      <div className="hero-content">
        <h1 className="hero-title">
          Timeless and elegant
          <br />
          diamond jewelry
        </h1>
        <p className="hero-description">
          Exquisite sparkling that transcends generations
        </p>
        <Link to={"/"} className="cta">
          Shop Now
        </Link>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="hero" />
      </div>
    </section>
  );
};

export default Banner;
