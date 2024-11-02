import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { store } from "./store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
