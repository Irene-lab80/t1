import { endpoints } from "../endpoints";
import { mainApi, tags } from "../mainApi";
import { IResponseProducts, Product } from "./types";

export const productsApi = mainApi.injectEndpoints({
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
      serializeQueryArgs: ({ endpointName, queryArgs }) => ({
        name: endpointName,
        type: queryArgs.q,
      }),
      merge(currentCacheData, responseData) {
        const newResponses = responseData.products.filter(
          (newResponse) =>
            !currentCacheData.products.some(
              (currentResponse) => currentResponse.id === newResponse.id
            )
        );
        currentCacheData.products.push(...newResponses);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      providesTags: [tags.products],
    }),
  }),
});

export const { useGetProductByIdQuery, useGetProductsQuery } = productsApi;
