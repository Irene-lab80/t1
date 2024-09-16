import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      unknown,
      { search: string; limit: number; skip: number }
    >({
      query: (params) => ({
        url: endpoints.products,
        params,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = mainApi;
