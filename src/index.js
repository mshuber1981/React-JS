import React from "react";
import ReactDOM from "react-dom";
// Context
import { AppProvider } from "./context";
import { CartProvider } from "./components/Cart/cartContext";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
