import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/sclices/productSlice";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <div>
        <h1>Products</h1>
        <hr style={{ height: "5px" }} />
      </div>
      <div className="flex_row flex_wrap">
        {products &&
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default ProductList;
