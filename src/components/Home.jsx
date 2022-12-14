import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";
import Product from "./Product";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={500}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/71YIDh9SEtL._SX3000_.jpg"
              alt="bg1"
            />
          </div>
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/71dbxIcDioL._SX3000_.jpg"
              alt="bg2"
            />
          </div>
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg"
              alt="bg3"
            />
          </div>
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg"
              alt="bg4"
            />
          </div>
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
              alt="bg5"
            />
          </div>
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
              alt="bg6"
            />
          </div>
          <div>
            <img
              className="home__bg"
              loading="lazy"
              src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
              alt="bg7"
            />
          </div>
        </Carousel>
      </div>

      <div className="home__row">
        <Product
          id={Math.random()}
          title="Mens Fashion Athletic Hoodies Sport Sweatshirt Solid Color Fleece Pullover"
          price={22.99}
          image={image1}
          rating={5}
        />
        <Product
          id={Math.random()}
          title="Mens Flannel Shirt With Hoodie Denim Jacket For Men With Hoodie Navy Blue Fleece Jacket"
          price={30.98}
          image={image2}
          rating={4}
        />
        <Product
          id={Math.random()}
          title="Champion Men's Unisex Cotton T-Shirt, Classic Tee, C Logo"
          price={27.98}
          image={image3}
          rating={5}
        />
        <Product
          id={Math.random()}
          title="Mens Fashion Athletic Joggers Pants - Sweatpants Trousers Cotton Cargo Pants Mens Long Pants"
          price={22.99}
          image={image4}
          rating={3}
        />
      </div>

      <div className="home__row">
        <Product
          id={Math.random()}
          title="Amazon Brand – Stone & Beam Rustin Contemporary Deep-Seated Sofa Couch, 89"
          price={178.99}
          image={image5}
          rating={5}
        />
        <Product
          id={Math.random()}
          title="Amazon Brand - Stone & Beam Westview Extra-Deep Down-Filled Sofa Couch, 89"
          price={210.0}
          image={image7}
          rating={4}
        />
      </div>

      <div className="home__row">
        <Product
          id={Math.random()}
          title="SAMSUNG Odyssey CRG Series 49-Inch Dual QHD (5120x1440) Gaming Monitor, 120Hz, Curved, QLED, HDR, Height Adjustable Stand, Radeon FreeSync (LC49RG90SSNXZA)"
          price={1699.0}
          image={image6}
          rating={5}
        />
      </div>
    </div>
  );
};

export default Home;
