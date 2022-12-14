import React from "react";
import "./HeaderBar.css";
import { GiHamburgerMenu } from "react-icons/gi";

const HeaderBar = () => {
  return (
    <div className="headerBar">
      <div className="headerBar__left">
        <p className="first">
          <GiHamburgerMenu />
          All
        </p>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Registry</p>
        <p>Gift Cards</p>
        <p>Sell</p>
      </div>

      <div className="headerBar__right">
        <p>Turn up the cheer, shop gifts now</p>
      </div>
    </div>
  );
};

export default HeaderBar;
