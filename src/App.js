import { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "./GlobalStyles";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themes = {
  light: {
    color: "hsl(209, 61%, 16%)",
    background: "hsl(210, 36%, 96%)",
  },
  dark: {
    color: "hsl(210, 36%, 96%)",
    background: "hsl(209, 61%, 16%)",
  },
};

export default function App() {
  const [theme, setTheme] = useState("light");

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
        <h1>React</h1>
      </ThemeProvider>
    </>
  );
}
