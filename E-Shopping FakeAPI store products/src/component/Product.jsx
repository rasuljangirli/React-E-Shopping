import React from "react";
import "../css/product.css";
function Product({ product }) {
  const { id, title, price, description, category, image } = product;
  console.log(product);
  return (
    <div className="product_card">
      <img className="product_card_image" src={image} alt="" />
      <div className="product_card_text">
        <h3>{title.length <= 15 ? title : `${title.substring(0, 15)}...`}</h3>
        <h4>Price: {price}</h4>
        <button className="button">click me</button>
      </div>
    </div>
  );
}

export default Product;
