import React from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./Header.css";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const navigate = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();

  const Logout = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      <div className="header__input">
        <input type="text" />
        <AiOutlineSearch />
      </div>

      <div className="header__navbar">
        <Link to={!user && "/login"}>
          <div onClick={Logout} className="header__option">
            <span className="header__first">
              Hello {` ${user ? user?.email : "Guess"}`}
            </span>
            <span className="header__second">
              {user ? "Sign out" : "Sign in"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__first">Returns</span>
          <span className="header__second">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__first">Your</span>
          <span className="header__second">Prime</span>
        </div>

        <div
          className="header__option-special"
          onClick={() => navigate("/checkout")}
        >
          <AiOutlineShoppingCart />
          <p className="header__count">{basket?.length}</p>
          <span className="header__cart">Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
