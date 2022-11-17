import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CondominioProvider } from "./Context";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CondominioProvider>
      <App />
    </CondominioProvider>
  </React.StrictMode>
);
