import React from "react";
import "./Product.css";
import Product1 from "../../assets/mens_shoe.jpg";

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
          <p>⭐</p>
          {/* <p>⭐⭐</p>
          <p>⭐⭐⭐</p>
          <p>⭐⭐⭐⭐</p>
          <p>⭐⭐⭐⭐⭐</p> */}
        </div>
      </div>
      <img src={Product1} alt="Product 1" />

      <button>Add to cart</button>
    </div>
  );
}

export default Product;
