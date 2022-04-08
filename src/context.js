import {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";

const cocktailsUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = function ({ children }) {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const toggleTheme = () =>
    setTheme((prevState) =>
      prevState === "light" ? setTheme("dark") : setTheme("light")
    );

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
        toggleTheme,
        setTheme,
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
