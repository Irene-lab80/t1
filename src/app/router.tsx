import { createBrowserRouter } from "react-router-dom";
import { Cart, Error, Home, Login, Product } from "../pages";
import { ROUTES } from "./routes";
import { Layout } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Error />,
      },
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
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
    ],
  },
]);
