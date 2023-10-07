import { Link } from "react-router-dom";
import "./Experts.css";

const Experts = () => {
  return (
    <section className="experts-section">
      <div className="experts-container desktop-max">
        <p className="expert-text">
          Experts assistance at your fingerprint distance - Reach out anytime
        </p>
        <Link className="experts-cta cta" to={"/"}>
          Connect with experts
        </Link>
      </div>
    </section>
  );
};

export default Experts;
