import React from "react";
import "./Home.css";
import Banner from "../../assets/home-1-plain.jpg";
import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Banner} alt="Banner" />
        <div className="home_row">
          <Product />
          <Product />

          {/* Product */}
          {/* Product */}
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home_row">
          <Product />
          <Product />
          <Product />
          <Product />
          {/* Product */}
          {/* Product */}
          {/* Product */}
          {/* product */}
        </div>
      </div>
    </div>
  );
}

export default Home;
