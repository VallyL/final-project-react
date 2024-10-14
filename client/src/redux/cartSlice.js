import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  isLoading: false,
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product } = action.payload;
      const existingProduct = state.cartItems.find((item) => item === product);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateQuantity: (state, action) => {
      const { product, newQuantity } = action.payload;
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cartItems");
    },
    setInitialCartItems: (state, action) => {
      state.cartItems = action.payload;
      localStorage.setItem("cartItems", JSON.stringify(action.payload));
    },
  },
});

export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const updateQuantity = cartSlice.actions.updateQuantity;
export const clearCart = cartSlice.actions.clearCart;
export const setInitialCartItems = cartSlice.actions.setInitialCartItems;

export default cartSlice.reducer;
