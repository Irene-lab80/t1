import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { router, store } from "@/app";
import { CartProvider } from "@/providers";

import "react-toastify/dist/ReactToastify.css";
import "./shared/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <CartProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </CartProvider>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
