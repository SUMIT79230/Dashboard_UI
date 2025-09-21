// src/main.jsx (or index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ThemeProviderWrapper from "./theme/ThemeProviderWrapper";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </Provider>
  </React.StrictMode>
);
