import { combineReducers } from "@reduxjs/toolkit";
import { mainApi, mainApiReducer } from "./mainApi";
import { cartReducer } from "./cart/cart";

const reducers = {
  [mainApi.reducerPath]: mainApiReducer,
  cartReducer: cartReducer,
};

export const rootReducer = combineReducers(reducers);
