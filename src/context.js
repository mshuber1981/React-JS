import {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
// Data
import { cartItems } from "./data";
// Reducers
import cartReducer from "./components/Cart/cartReducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const cocktailsUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = function ({ children }) {
  const [theme, setTheme] = useState("light");
  // Cart
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // Cocktails
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const setLight = () => setTheme("light");

  const setDark = () => setTheme("dark");

  const toggleTheme = () =>
    setTheme((prevState) =>
      prevState === "light" ? setTheme("dark") : setTheme("light")
    );

  // Cart
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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
  }, [state.cart]);

  // Cocktails
  const fetchDrinks = useCallback(
    async function () {
      setLoading(true);
      try {
        const response = await fetch(`${cocktailsUrl}${searchTerm}`);
        const data = await response.json();
        // console.log(data);
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map(function (item) {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
              item;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass,
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [searchTerm]
  );

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setLight,
        setDark,
        toggleTheme,
        // Cart
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount,
        // Cocktails
        loading,
        cocktails,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
