import React from "react";
import "./Checkout.css";
import CheckoutBanner from "../../assets/Black-Friday-Banner.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_add" src={CheckoutBanner} alt="" />
        <div>
          <h2 className="checkout_title">Your cart</h2>
        </div>
      </div>
      <div className="checkout_right">
        <h2>Subtotal will go here</h2>
      </div>
    </div>
  );
}

export default Checkout;
