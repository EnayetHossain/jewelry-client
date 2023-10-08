import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Login.css";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(from);
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setError("");
        form.reset();
        navigate(from);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        navigate(from);
      });
  };
  return (
    <div className="sign-up-container">
      <p className="error">{error}</p>
      <form onSubmit={handleLogin}>
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
