import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
