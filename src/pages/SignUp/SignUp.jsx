import { useContext, useState } from "react";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || "/";
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        updateUser(name, photo, phone)
          .then(() => {
            setError("");
            form.reset();
            navigate(from);
          })
          .catch((err) => {
            setError(err.message);
          });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleSignIn()
      .then(() => {
        setError("");
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="sign-up-container">
      <p className="error">{error}</p>
      <form onSubmit={handleSignUp}>
        <input type="text" placeholder="Your Name" name="name" />
        <input type="text" placeholder="Photo URL" name="photo" />
        <input type="number" placeholder="Phone Number" name="phone" />
        <input type="email" placeholder="Your Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="submit" value={"Sign up"} name="submit" />
      </form>
      <button className="btn sign-btn" onClick={handleGoogleLogin}>
        <BsGoogle className="btn-icon"></BsGoogle> Continue with Google
      </button>
      <p className="redirect">
        Already have an account <Link to={"/login"}>Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
