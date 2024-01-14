import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// react-router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./page/about/About.jsx";
import Layout from "./page/layout/Layout.jsx";
import Products from "./page/product/Proudcts.jsx";
import Home from "./page/home/Home.jsx";
import Contact from "./page/contact/Contact.jsx";
import Service from "./page/sevice/Service.jsx";

// create router-dom

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/service",
        element: <Service />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
