import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { mainApi } from "./mainApi";

export interface ErrorPayload {
  data: { message: string };
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!");
    toast.error(
      // "data" in action.error
      //   ? (action.error.data as { message: string }).message
      //   : action.error.message
      (action.payload as ErrorPayload).data.message
    );
  }

  return next(action);
};

export const middlewares = [mainApi.middleware, rtkQueryErrorLogger];
