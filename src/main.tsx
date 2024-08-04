import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./Style.css";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";

const rootNode = document.getElementById("root");
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);
rootNode
  ? ReactDOM.createRoot(rootNode).render(
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  : console.log("root not found!");
