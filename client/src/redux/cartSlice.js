import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const addToCart = (state, action) => {
  state.cartItems.push(action.payload);
};

export const removeFromCart = (state, action) => {
  const index = state.cartItems.indexOf(action.payload);
  if (index > -1) {
    state.cartItems.splice(index, 1);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart,
    removeFromCart,
  },
});

export default cartSlice.reducer;
