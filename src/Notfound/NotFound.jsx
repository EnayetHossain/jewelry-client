import { FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="desktop-max">
      <div className="not-found">
        <h1>Not Found</h1>
        <p>Sorry, but the page you were trying to view does not exist.</p>
        <Link className="not-found-link" to={"/"}>
          <span>
            <FaAngleLeft></FaAngleLeft>
          </span>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
