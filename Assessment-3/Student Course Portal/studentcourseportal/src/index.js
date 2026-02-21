import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

/* ✅ Refresh on course page → go Home */
if (
  window.location.pathname.startsWith("/course") &&
  performance.navigation.type === 1
) {
  window.location.replace("/");
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);