import { createSlice } from "@reduxjs/toolkit";

const getBasketLocalStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  } else {
    return [];
  }
};
const initialState = {
  products: getBasketLocalStorage(),
  drower: false,
};

const writeFromLocalStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct =
        state.products &&
        state.products.find((product) => product.id === action.payload.id);

      if (findProduct) {
        // onceden eklenmis
        const extractedProduct = state.products.filter(
          (product) => product.id !== findProduct.id
        );
        findProduct.count += action.payload.count;
        state.products = [...extractedProduct, findProduct];
        writeFromLocalStorage(state.products);
      } else {
        state.products = [...state.products, action.payload];
        writeFromLocalStorage(state.products);
      }
    },
    setDrower: (state) => {
      state.drower = !state.drower;
    },
    removeBasketProduct: (state, action) => {
      const productId = action.payload;
      const newProductArr = state.products.filter(
        (product) => product.id !== productId
      );
      state.products = [...newProductArr];
      writeFromLocalStorage(newProductArr);
    },
  },
});

export const { addToBasket, setDrower, removeBasketProduct } =
  basketSlice.actions;
export default basketSlice.reducer;
