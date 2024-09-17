import { endpoints } from "../endpoints";
import { mainApi } from "../mainApi";
import { IResponseProducts, Product } from "./types";

export const extendedApi = mainApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductById: builder.query<Product, number>({
      query: (id) => ({
        url: `${endpoints.products}/${id}`,
      }),
    }),
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

export const { useGetProductByIdQuery, useGetProductsQuery } = extendedApi;
