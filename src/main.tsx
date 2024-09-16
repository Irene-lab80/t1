import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { HelmetProvider } from "react-helmet-async";

import "./shared/index.css";
import { Provider } from "react-redux";
import { store } from "./app/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
