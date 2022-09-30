import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const redux = require('redux')
// const createStore = redux.createStore

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
