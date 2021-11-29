import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";
import NavBar from "./components/NavBar";
import Switch from "./components/Switch";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themes = {
  light: {
    name: "light",
    color: "hsl(209, 61%, 16%)",
    background: "hsl(210, 36%, 96%)",
  },
  dark: {
    name: "dark",
    color: "hsl(210, 36%, 96%)",
    background: "hsl(209, 61%, 16%)",
  },
};

export default function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  useEffect(function () {
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <NavBar />
        <main>
          <h1>React</h1>
          <Switch theme={theme} toggleTheme={toggleTheme} />
        </main>
      </ThemeProvider>
    </>
  );
}
