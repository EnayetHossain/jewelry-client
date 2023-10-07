import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="desktop-max">
      <div className="logo">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
        >
          <path
            d="M200,0C89.54,0,0,89.54,0,200S89.54,400,200,400s200-89.54,200-200S310.46,0,200,0Zm49.05,314.46a46.26,46.26,0,0,1-65.4,0h0L134.59,265.4V200H200l49.06,49.05A46.28,46.28,0,0,1,249.05,314.46ZM265.41,200H200L151,150.94a46.24,46.24,0,0,1,65.4-65.4l49.06,49.05Z"
            fill="#212529"
            fillRule="evenodd"
          />
        </svg>
        <Link to={"/"}>LuxuryJewel</Link>
      </div>

      <div className="contact">
        <h1>Contact Us</h1>
        <p className="address">dummy, address, in anywhere, in the world</p>
        <p className="address">012454353334</p>
        <p className="address">example@gamil.com</p>
      </div>

      <div className="footer-menu">
        <h1>Menu</h1>
        <ul className="footer-main-menu">
          <li className="footer-menu-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="footer-menu-item">
            <Link to={"/all-jewelry"}>View All Jewelry</Link>
          </li>
          <li className="footer-menu-item">
            <Link to={"/my-jewelry"}>My Jewelry</Link>
          </li>
          <li className="footer-menu-item">
            <Link to={"/new-jewelry"}>Add new Jewelry</Link>
          </li>
          <li className="footer-menu-item">
            <Link to={"/blog"}>Blog</Link>
          </li>
        </ul>

        <div className="footer-logs">
          <Link to={"/login"}>Login</Link>
          <Link to={"/signUp"}>SignUp</Link>
          <Link to={"/logout"}>Logout</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
