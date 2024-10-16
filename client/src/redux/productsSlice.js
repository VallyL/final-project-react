import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
  productsByCategory: {},
  isLoadingByCategory: {},
  errorByCategory: {},
  product: null,
  isLoadingProduct: false,
  errorProduct: null,
};

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
    try {
      const response = await axios.get(
        `http://localhost:3333/categories/${id}`
      );
      return {
        id,
        products: response.data.data,
        category: response.data.category,
      };
    } catch (error) {
      console.error("Error fetching products by category:", error);
      return { id, error: error.message };
    }
  }
);

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (id) => {
    try {
      const response = await axios.get(`http://localhost:3333/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching product:", error);
      return { error: error };
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
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
      })
      .addCase(fetchProduct.pending, (state) => {
        state.isLoadingProduct = true;
        state.errorProduct = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoadingProduct = false;
        state.errorProduct = action.error.message;
      });
  },
});

export default productsSlice.reducer;
