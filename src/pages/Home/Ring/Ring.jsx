import { Link } from "react-router-dom";
import ringImage from "../../../assets/ring.png";
import "./Ring.css";

const Ring = () => {
  return (
    <section className="ring-section desktop-max">
      <div className="hero-content ring-content">
        <h1 className="hero-title ring-title">Timeless and engagement rings</h1>
        <p className="hero-description ring-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          obcaecati quae ipsa, suscipit repellendus hic porro voluptate eum
          repellat atque. Dignissimos error molestiae adipisci inventore eius
          rerum! Voluptas, itaque consectetur!
        </p>
        <Link to={"/"} className="cta">
          Explore
        </Link>
      </div>

      <div className="ring-image">
        <img src={ringImage} alt="hero" />
      </div>
    </section>
  );
};

export default Ring;
