import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: null,
};

export const sendOrder = createAsyncThunk("order/sendOrder", async (data) => {
  try {
    const response = await axios.post("http://localhost:3333/order/send", data);
    return response.data;
  } catch (error) {
    console.error("Error sending order:", error);
    return { error: error.message };
  }
});

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendOrder.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(sendOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
