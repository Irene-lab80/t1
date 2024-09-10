import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./pages";

export enum ROUTES {
  HOME = "/",
  CART = "/cart",
  PRODUCT = "/product",
}

const router = createBrowserRouter([
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

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
