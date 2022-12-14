import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__content">
        <div className="checkout__left">
          <img
            className="checkout__advert"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/Primeevent/XCM_Manual_1500x300_1218905_1138182_R1_51fe0ef1_16bf_43c7_84a2_ecda6a1f2396_jpg._CB436084429_.jpg"
            alt="advert"
          />

          <div>
            <h3 className="h3">{!user ? "" : `Hello,  ${user?.email}`}</h3>
            <h2 className="checkout__title">Shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
