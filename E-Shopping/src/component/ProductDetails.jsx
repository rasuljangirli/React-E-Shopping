import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProducts } from "../redux/sclices/productSlice";
import "../css/productDetails.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from "../redux/sclices/basketSlice";
function ProductDetails() {
  const { id } = useParams();
  const { products, selectProduct } = useSelector((store) => store.products);
  const { title, price, description, category, image } = selectProduct;

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProducts(product));
        }
      });
  };

  const [count, setCount] = useState(1);

  const incriment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      title,
      description,
      image,
      count,
      price,
      category,
    };

    dispatch(addToBasket(payload));
  };

  return (
    <div className="product_container">
      <div className="product_container_img">
        <img className="img" src={image} alt="" />
      </div>
      <div className="product_container_two_section">
        <div className="product_container_two_section_one">
          <h3 style={{ maxWidth: "600px" }}>Name: {title} </h3>

          <h3>Catagory: {category}</h3>
          <p style={{ maxWidth: "600px" }}> {description} </p>
          <h3>
            <span>
              Price: <span style={{ color: "red" }}> {price} USD</span>
            </span>
          </h3>
          <div className="icons">
            <CiCircleMinus onClick={decrement} />
            {count}
            <CiCirclePlus onClick={incriment} />
          </div>
          <div>
            <button
              onClick={addBasket}
              className="product_container_two_section_button"
            >
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
