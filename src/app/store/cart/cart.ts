import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, endpoints } from "../endpoints";
import { ICartResponse } from "./types";

interface IState {
  data: ICartResponse | null;
  status: "uninitialized" | "loading" | "succeeded" | "failed";
}

const initialState: IState = {
  data: null,
  status: "uninitialized",
};

export const getCart = createAsyncThunk<ICartResponse, number>(
  "cart/getCart",
  async (id) => {
    const res = await fetch(`${API_URL}${endpoints.cart}/${id}`).then((data) =>
      data.json()
    );
    return res as ICartResponse;
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCart.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const cartReducer = cartSlice.reducer;
