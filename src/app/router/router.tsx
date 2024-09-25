import { createBrowserRouter } from "react-router-dom";
import { Cart, Error, Home, Login, Product } from "@/pages";
import { Layout } from "@/components";
import { ROUTES } from "./routes";
import { isAuthenticated, isNotAuthenticated } from "./helpers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        loader: async () => await isNotAuthenticated(),
        children: [
          {
            element: <Home />,
            index: true,
          },
          {
            path: ROUTES.CART,
            element: <Cart />,
          },
          {
            path: `${ROUTES.PRODUCT}/:id`,
            element: <Product />,
            index: true,
          },
        ],
      },
      {
        loader: async () => await isAuthenticated(),
        children: [
          {
            path: ROUTES.LOGIN,
            element: <Login />,
          },
        ],
      },
      {
        path: "*",
        element: <Error />,
      },

      {
        path: ROUTES.ERROR,
        element: <Error />,
      },
    ],
  },
]);
