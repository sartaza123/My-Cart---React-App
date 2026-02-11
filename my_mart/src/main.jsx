// src/main.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App";
import Details from "./components/ProductDetails";
import Error from "./components/Error";
import Search from "./components/Search";

// PAGES
import Account from "./pages/Account";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Category from "./pages/Category";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./components/CheckOut";

// redux
import { Provider } from "react-redux";
import appStore from "./hooks/appStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "account", element: <Account /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "search", element: <Search /> },

      // Product details (dynamic)
      { path: "details/:id", element: <Details /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
