import React from "react";
import "../css/product.css";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  const { id, title, price, description, category, image } = product;
  // console.log(product);
  const navigate = useNavigate();
  return (
    <div className="product_card">
      <img className="product_card_image" src={image} alt="" />
      <div className="product_card_text">
        <h3>{title.length <= 15 ? title : `${title.substring(0, 15)}...`}</h3>
        <h4>
          Price: {price} <span>USD</span>
        </h4>
        <button
          onClick={() => navigate("/product-details/" + id)}
          className="button"
        >
          click me
        </button>
      </div>
    </div>
  );
}

export default Product;
