import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./component/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { removeBasketProduct, setDrower } from "./redux/sclices/basketSlice";

function App() {
  const { products, drower } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  return (
    <div>
      <Loading />
      <Header />
      <RouterConfig />
      <Drawer
        open={drower}
        onClose={() => dispatch(setDrower())}
        anchor="right"
      >
        <div style={{ marginTop: "60px" }}>
          {products &&
            products.map((product) => {
              return (
                <div
                  className="flex_row"
                  style={{ padding: "20px", justifyContent: "space-between" }}
                  key={product.id}
                >
                  <div className="flex_row" style={{ marginRight: "40px" }}>
                    <img
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                      }}
                      src={product.image}
                      alt=""
                    />
                    <p style={{ Width: "320px", marginRight: "5px" }}>
                      {product.title}
                      <span style={{ padding: "10px", color: "red" }}>
                        {product.count}
                      </span>
                    </p>
                  </div>
                  <div className="flex_row">
                    <p style={{ marginRight: "10px", width: "80px" }}>
                      {product.price} USD
                    </p>

                    <button
                      onClick={() => dispatch(removeBasketProduct(product.id))}
                      style={{
                        padding: "3px 20px",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "lightgreen",
                        cursor: "pointer",
                      }}
                    >
                      sil
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </Drawer>
    </div>
  );
}

export default App;
