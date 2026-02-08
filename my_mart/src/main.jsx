// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Details from "./components/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "account", element: <Account /> },
      { path: "menu", element: <Menu /> },
      { path: "cart", element: <Cart /> },
      { path: "/details/:id", element: <Details /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
