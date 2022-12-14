import React from "react";
import { useNavigate } from "react-router-dom";
import "./FooterSignin.css";

const FooterSignin = () => {
  const navigate = useNavigate();
  return (
    <div className="footerSignin">
      <span>See personalized recommendations</span>
      <button onClick={() => navigate("/login")}>Sign in</button>
      <p>
        New customer? <a href="/">Start here</a>
      </p>
    </div>
  );
};

export default FooterSignin;
