import { useContext, useState } from "react";
import { BsEyeFill, BsEyeSlashFill, BsGoogle } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import "./Login.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { signInUser, googleSignIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then(() => {
        setError("");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = (event) => {
    event.preventDefault();
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        const savedUser = {
          name: loggedUser.displayName,
          photo: loggedUser.photoURL,
          phone: loggedUser.phoneNumber,
          email: loggedUser.email,
          role: "client",
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              setError("");
              navigate(from, { replace: true });
            }
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="sign-up-container">
      <p className="error">{error}</p>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Your Email" name="email" />
        <input
          type={show ? "text" : "password"}
          placeholder="Password"
          name="password"
        />

        <div className="toggle" onClick={() => setShow(!show)}>
          {show ? <BsEyeSlashFill></BsEyeSlashFill> : <BsEyeFill></BsEyeFill>}
          <p>{show ? "hide" : "show"} password</p>
        </div>

        <input type="submit" value={"Login"} name="submit" />
      </form>
      <button className="btn sign-btn" onClick={handleGoogleLogin}>
        <BsGoogle className="btn-icon"></BsGoogle> Continue with Google
      </button>
      <p className="redirect">
        Don{"'"}t have an account <Link to={"/sign-up"}>SignUp</Link>
      </p>
    </div>
  );
};

export default Login;
