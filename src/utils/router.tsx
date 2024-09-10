import { Outlet, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages";
import { ROUTES } from "./routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <header>header</header>
        <Outlet />
        <footer>footer</footer>
      </div>
    ),
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
