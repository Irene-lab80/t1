import { createBrowserRouter } from "react-router-dom";
import { Cart, Error, Home, Product } from "../pages";
import { ROUTES } from "./routes";
import { Layout } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
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
      {
        path: ROUTES.ERROR,
        element: <Error />,
      },
    ],
  },
]);
