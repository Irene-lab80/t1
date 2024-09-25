import { combineReducers } from "@reduxjs/toolkit";
import { mainApi, mainApiReducer } from "./mainApi";
import { cartReducer } from "./cart/cart";
import { userReducer } from "./user/user";

const reducers = {
  [mainApi.reducerPath]: mainApiReducer,
  cartReducer,
  userReducer
};

export const rootReducer = combineReducers(reducers);
