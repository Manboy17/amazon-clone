import React, { useEffect, useState } from "react";
import "./Footer.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [backToUp, setBackToUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToUp(true);
      } else {
        setBackToUp(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <p onClick={scrollUp} className="footer__p1">
        Bact to tops
      </p>
      <div className="footer__container">
        <div className="footer__details">
          <div className="footer__title">Get to Know us</div>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p> Amazon Science</p>
        </div>

        <div className="footer__details">
          <div className="footer__title">Make Money with Us</div>
          <p> Sell products on Amazon</p>
          <p>Sell on Amazon Business</p>
          <p>Sell apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise Your Products</p>
          <p>Self-Publish with Us</p>
          <p>Host an Amazon Hub</p>
          <p>› See More Make Money with Us</p>
        </div>

        <div className="footer__details">
          <div className="footer__title">Amazon Payment Products</div>
          <p>Amazon Business Card</p>
          <p>Shop with Points</p>
          <p>Reload Your Balance</p>
          <p>Amazon Currency Converter</p>
        </div>

        <div className="footer__details">
          <div className="footer__title">Let Us Help You</div>
          <p> Amazon and COVID-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Returns & Replacements</p>
          <p>Manage Your Content and Devices</p>
          <p>Amazon Assistant</p>
          <p>Help</p>
        </div>
      </div>

      <div className="footer__details_two">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />

        <div className="footer__footer">
          <div className="footer__subFooter">
            <AiOutlineGlobal /> Eglish
          </div>
          <div className="footer__subFooter">$ USD - U.S. Dollar</div>
          <div className="footer__subFooter">🇺🇸 United States</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
