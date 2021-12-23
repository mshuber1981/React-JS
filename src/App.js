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
import Reviews from "./pages/Reviews";
import Accordian from "./pages/Accordian";
import Menu from "./pages/Menu";
import Tabs from "./pages/Tabs";
import Slider from "./pages/Slider";
import LoremIpsum from "./pages/LoremIpsum";
import Error from "./pages/Error";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themes = {
  light: {
    name: "light",
    color: "var(--clr-grey-1)",
    background: "var(--clr-grey-10)",
  },
  dark: {
    name: "dark",
    color: "var(--clr-grey-10)",
    background: "#131722",
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
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/Accordian" element={<Accordian />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Tabs" element={<Tabs />} />
          <Route path="/Slider" element={<Slider />} />
          <Route path="/LoremIpsum" element={<LoremIpsum />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
