import { RootState } from "./../store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, endpoints } from "../endpoints";
import { Cart, ICartResponse } from "./types";

interface IState {
  cart: Cart | null;
  status: "uninitialized" | "loading" | "succeeded" | "failed";
}

const initialState: IState = {
  cart: null,
  status: "uninitialized",
};

export const getCart = createAsyncThunk<ICartResponse, number>(
  "cart/getCart",
  async (id, { getState }) => {
    const state = getState() as unknown as RootState;
    const access_token = state.userReducer.access_token;
    const headers = { authorization: `Bearer ${access_token}` };
    const res = await fetch(`${API_URL}${endpoints.cart}/${id}`, {
      headers,
    });
    const data = await res.json();
    return data;
  }
);
interface IPayload {
  merge: boolean; 
  products: {
    id: number;
    quantity: number;
  }[];
}
export const updateCart = createAsyncThunk<
  Cart,
  { cart_id: number; payload: IPayload }
>("cart/updateCart", async ({ cart_id, payload }, { getState }) => {
  const state = getState() as unknown as RootState;
  const access_token = state.userReducer.access_token;
  const headers = {
    authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(`${API_URL}${endpoints.carts}/${cart_id}`, {
    headers,
    body: JSON.stringify(payload),
    method: "PUT",
  });

  const data = await res.json();

  return data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload?.carts ? action.payload?.carts[0] : null;
      })
      .addCase(getCart.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updateCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(updateCart.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
