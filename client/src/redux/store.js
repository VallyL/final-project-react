import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesSlice";
import discountReducer from "./discountSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    discount: discountReducer,
  },
});
