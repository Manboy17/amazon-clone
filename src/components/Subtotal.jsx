import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { totalSumOfBasket } from "./reducer";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const Payment = () => {
    if (
      window.confirm(
        "Thank you for your order! Want to came back to home page?"
      ) &&
      navigate("/")
    );
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalSumOfBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={Payment}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
