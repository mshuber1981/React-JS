import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import BirthdayReminder from "./pages/BirthdayReminder";
import Error from "./pages/Error";

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

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      e.matches ? setTheme("dark") : setTheme("light");
    });

  return (
    <BrowserRouter>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={<Home theme={themes[theme]} toggleTheme={toggleTheme} />}
          />
          <Route path="/Birthday-Reminder" element={<BirthdayReminder />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
