import React from "react";
import ReactDOM from "react-dom";
// https://reactjs.org/docs/context.html
import { AppProvider } from "./context";
import { CartProvider } from "./components/Cart/cartContext";
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
import { Provider } from "react-redux";
import { store } from "./store";
// https://create-react-app.dev/docs/adding-css-reset
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
