import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./sclices/appSlice.jsx";
import productsReducer from "./sclices/productSlice.jsx";

export default configureStore({
  reducer: {
    app: appReducer,
    products: productsReducer,
  },
});
