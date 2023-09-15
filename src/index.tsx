import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { injectColors } from "./utils/injectColors";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

injectColors();

root.render(<App />);
