import { BsGoogle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="sign-up-container">
      <form>
        <input type="email" placeholder="Your Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value={"Login"} name="submit" />
      </form>
      <button className="btn sign-btn">
        <BsGoogle className="btn-icon"></BsGoogle> Continue with Google
      </button>
      <p className="redirect">
        Don{"'"}t have an account <Link to={"/sign-up"}>SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
