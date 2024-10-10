import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import discountReducer from "./discountSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    discount: discountReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
