import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { ROUTES } from "./routes";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>error</div>,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: ROUTES.CART,
        element: <div>cart</div>,
      },
      {
        path: `${ROUTES.PRODUCT}/:id`,
        element: <div>product</div>,
        index: true,
      },
    ],
  },
]);
