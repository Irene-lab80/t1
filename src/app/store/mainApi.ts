import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoints } from "./endpoints";
import { IResponseProducts } from "./products/types";

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<
      IResponseProducts,
      { q?: string; limit: number; skip: number }
    >({
      query: (params) => ({
        url: endpoints.searchProducts,
        params,
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newResp) => {
        currentCache.products.push(...newResp.products);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetProductsQuery } = mainApi;
