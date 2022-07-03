import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss"
import "../node_modules/bootstrap/js/src/modal"

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
  </>
);
