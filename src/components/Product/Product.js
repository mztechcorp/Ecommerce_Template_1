import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Ontario</p>
        <p className="product_price">
          <small>$</small>
          <strong>59.99</strong>
        </p>
        <div className="product_rating">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        </div>
      </div>
    </div>
  );
}

export default Product;
