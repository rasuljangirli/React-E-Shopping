import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  initialState: {
    products: [],
    selectProduct: {},
    loading: fasle,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProductAllData.pending, (state) => {
      state.status = "loading";
    });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
