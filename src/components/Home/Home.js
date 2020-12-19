import React from "react";
import "./Home.css";
import Banner from "../../assets/home-1-plain.jpg";
import Product from "../Product/Product";
import Product1 from "../../assets/mens_shoe.jpg";
import Product2 from "../../assets/bedding.jpg";
import Product3 from "../../assets/women_jacket.tif";
import Product4 from "../../assets/tops_1.jpg";
import Product5 from "../../assets/mens_shoe.jpg";
import Product6 from "../../assets/mens_shoe.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Banner} alt="Banner" />
        <div className="home_row">
          <Product
            title="The Ontario"
            price={29.99}
            image={Product1}
            rating={5}
          />
          <Product
            title="The Ontario"
            price={29.99}
            image={Product1}
            rating={5}
          />

          {/* Product */}
          {/* Product */}
        </div>

        <div className="home_row">
          <Product
            title="HOME COLLECTION | HOME COLLECTION SUPER SOFT DOUBLE BRUSHED MICROFIBER 1800 SERIES BED SET  WRINKLE FREE, HYPOALLERGENIC, DEEP POCKET SHEETS, BEDDING, SHEET SET, TWIN, FULL, QUEEN, KING"
            price={59.99}
            image={Product2}
            rating={5}
          />
          <Product
            title="The Berry| Gorgeous faux fur surrounds the hood on this cozy puffer coat, a compliment-worthy pick designed with a stand collar.

            "
            price={19.99}
            image={Product3}
            rating={5}
          />
          <Product
            title="THE CHIFFON | The Chiffon long sleeve Shirt. Top NEW! HOT! You can wear it one shoulder style, very soft, comfy material. 

            "
            price={29.99}
            image={Product4}
            rating={5}
          />
          {/* Product */}
          {/* Product */}
          {/* Product */}
        </div>

        <div className="home_row">
          <Product
            title="The Ontario"
            price={29.99}
            image={Product5}
            rating={5}
          />
          <Product
            title="The Ontario"
            price={29.99}
            image={Product6}
            rating={5}
          />
          <Product
            title="The Ontario"
            price={29.99}
            image={Product1}
            rating={5}
          />
          <Product
            title="The Ontario"
            price={29.99}
            image={Product1}
            rating={5}
          />
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
