import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <form>
        <input type="text" placeholder="Your Name" name="name" />
        <input type="text" placeholder="Photo URL" name="photo" />
        <input type="number" placeholder="Phone Number" name="phone" />
        <input type="email" placeholder="Your Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value={"Submit"} name="submit" />
      </form>
      <button className="btn sign-btn">
        <BsGoogle className="btn-icon"></BsGoogle> Continue with Google
      </button>
      <p className="redirect">
        Already have an account <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
