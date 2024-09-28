import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { mainApi } from "./mainApi";
import { ROUTES } from "../router/routes";

export interface IError {
  data: { message: string };
  status: number;
}

export const rtkQueryErrorLogger: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!");
    const error = (action.payload as IError).data.message;
    const status = (action.payload as IError).status;

    if (status === 401) {
      window.location.href = ROUTES.LOGIN;
    }

    toast.error(
      // "data" in action.error
      //   ? (action.error.data as { message: string }).message
      //   : action.error.message
      error
    );
  }

  return next(action);
};

export const middlewares = [mainApi.middleware, rtkQueryErrorLogger];
