import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { MdOutlineArrowRight } from "react-icons/md";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signin = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        console.warn(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        if (userAuth) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.warn(error.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />

          <h5>Password</h5>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />

          <button onClick={signin} type="submit" className="login__btn">
            Continue
          </button>

          <p>
            By continuing, you agree to Amazon's{" "}
            <span className="login_link">Conditions of Use</span> and{" "}
            <span className="login_link">Privacy Notice</span>.
          </p>
          <p className="login__p1">
            <MdOutlineArrowRight />
            Need help?
          </p>
        </form>

        <p>New to Amazon?</p>
        <button onClick={register} className="login__btn-create">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
