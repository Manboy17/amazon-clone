import React from "react";
import "./Product.css";
import { FaStar } from "react-icons/fa";
import { useStateValue } from "./StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <p className="p1">{title}</p>
      <p className="product__price">
        <strong>$</strong>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, index) => (
            <FaStar style={{ color: "#df7020" }} key={index} />
          ))}
      </div>
      <img src={image} alt="product1" />
      <button onClick={addToBasket} className="product__btn">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
