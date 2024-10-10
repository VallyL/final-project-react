import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
};

export const sendDiscountRequest = createAsyncThunk(
  "discount/sendDiscountRequest",
  async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/sale/send",
        data
      );
      return response.data;
    } catch (error) {
      console.error("Error sending discount request:", error);
      return { error: error.message };
    }
  }
);

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendDiscountRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendDiscountRequest.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(sendDiscountRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default discountSlice.reducer;
