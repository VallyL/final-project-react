import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get("http://localhost:3333/products/all");
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return { error: error.message };
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  "products/fetchProductsByCategory",
  async (id) => {
    const response = await axios.get(`http://localhost:3333/categories/${id}`);
    return {
      id,
      products: response.data.data,
      category: response.data.category,
    };
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    productsByCategory: {},
    isLoadingByCategory: {},
    errorByCategory: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.pending, (state, action) => {
        state.isLoadingByCategory[action.meta.arg] = true;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        const { id, products, category } = action.payload;
        state.isLoadingByCategory[id] = false;
        state.productsByCategory[id] = products;
        state.categories = state.categories || {};
        state.categories[id] = category;
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.isLoadingByCategory[action.payload.id] = false;
        state.errorByCategory[action.payload.id] = action.payload.error;
      });
  },
});

export default productsSlice.reducer;
