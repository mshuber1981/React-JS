import { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";
import { HashRouter, Routes, Route } from "react-router-dom";
// https://v5.reactrouter.com/web/guides/scroll-restoration
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import BirthdayReminder from "./pages/BirthdayReminder";
import ToursPage from "./pages/ToursPage";
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
  const { theme, setDark, setLight } = useGlobalContext();
  // https://stackoverflow.com/questions/56240067/accessing-context-from-useeffect
  const setDarkTheme = useRef(setDark);
  const setLightTheme = useRef(setLight);

  useEffect(function () {
    darkMode ? setDarkTheme.current() : setLightTheme.current();
  }, []);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setDarkTheme.current() : setLightTheme.current()
    );

  return (
    <HashRouter>
      <ScrollToTop />
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Birthday-Reminder" element={<BirthdayReminder />} />
          <Route path="/Tours" element={<ToursPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
