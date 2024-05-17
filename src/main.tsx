import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.tsx";

import "@unocss/reset/tailwind-compat.css";
import "virtual:uno.css";

const rootEl = document.getElementById("root");

ReactDOM
  .createRoot(rootEl!)
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
