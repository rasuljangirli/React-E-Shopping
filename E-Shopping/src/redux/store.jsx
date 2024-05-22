import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./sclices/appSlice.jsx";
import productsReducer from "./sclices/productSlice.jsx";
import basketReducer from "./sclices/basketSlice.jsx";

export default configureStore({
  reducer: {
    app: appReducer,
    products: productsReducer,
    basket: basketReducer,
  },
});
