// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Details from "./components/ProductDetails";

// PAGES
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },

      { path: "category", element: <Category /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "account", element: <Account /> },
      { path: "cart", element: <Cart /> },

      // Product details (dynamic)
      { path: "details/:id", element: <Details /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
