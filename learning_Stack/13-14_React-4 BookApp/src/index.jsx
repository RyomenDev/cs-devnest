import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/books";
import App from "./App.jsx";

import "./index.css";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider>
    <App />
  </Provider>
);
