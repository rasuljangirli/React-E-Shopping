import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ProductDetails from "../component/ProductDetails";

function RouterConfig() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
