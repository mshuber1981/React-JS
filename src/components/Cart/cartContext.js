import React from "react";
// Reducer
import cartReducer from "./cartReducer";
// Data
import { cartItems } from "../../data";

const url = "https://course-api.com/react-useReducer-cart-project";
const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const CartContext = React.createContext();

const CartProvider = function ({ children }) {
  const [state, dispatch] = React.useReducer(cartReducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decrease = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: "DISPLAY_ITEMS", payload: cart });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  React.useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease, toggleAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => React.useContext(CartContext);

export { CartContext, CartProvider };
