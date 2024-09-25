import { endpoints } from "../endpoints";
import { mainApi } from "../mainApi";
import { IParamsLogin, IResponseLogin, IUser } from "./types";

export const loginApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.query<IResponseLogin, IParamsLogin>({
      query: (body) => ({
        url: `${endpoints.login}`,
        method: "POST",
        body,
        headers: { "Content-type": "application/json" },
      }),
    }),
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: `${endpoints.me}`,
      }),
    }),
  }),
});

export const { useLazyLoginUserQuery, useLazyGetUserQuery, useGetUserQuery } = loginApi;
