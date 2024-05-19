import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function RouterConfig() {
  return (
    <div style={{ paddingTop: "80px" }}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default RouterConfig;
