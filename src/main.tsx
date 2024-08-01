import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style.css";

const rootNode = document.getElementById("root");
rootNode
  ? ReactDOM.createRoot(rootNode).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  : console.log("root not found!");
