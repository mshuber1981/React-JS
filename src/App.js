import React from "react";
import { useGlobalContext } from "./context";
import { useDispatch } from "react-redux";
import { fetchTours } from "./components/Tours/toursSlice";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import GlobalStyles from "./components/GlobalStyles";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import Home from "./pages/Home";
import BirthdayReminder from "./pages/BirthdayReminder";
import ToursPage from "./pages/ToursPage";
import Reviews from "./pages/Reviews";
import Accordian from "./pages/Accordian";
import Menu from "./pages/Menu";
import Tabs from "./pages/Tabs";
import Carousel from "./pages/Carousel";
import LoremIpsum from "./pages/LoremIpsum";
import ColorGenerator from "./pages/ColorGenerator";
import ToDo from "./pages/ToDo";
import Stripe from "./pages/Stripe";
import Cart from "./pages/Cart";
import Cocktails from "./pages/Cocktails";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themes = {
  light: {
    name: "light",
    color: "#27272A",
    background: "#FBFDFF",
  },
  dark: {
    name: "dark",
    color: "#FBFDFF",
    background: "#27272A",
  },
};

export default function App() {
  const { closeSideBar, isSideBarOpen, theme, setTheme } = useGlobalContext();
  const dispatch = useDispatch();

  React.useEffect(
    () => (darkMode ? setTheme("dark") : setTheme("light")),
    [setTheme]
  );

  React.useEffect(
    function () {
      const main = document.querySelector("main");
      const close = () => closeSideBar();

      if (isSideBarOpen) main.addEventListener("click", close);

      return () => main.removeEventListener("click", close);
    },
    [isSideBarOpen, closeSideBar]
  );
  // Tours data
  React.useEffect(() => dispatch(fetchTours()), [dispatch]);

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) =>
      e.matches ? setTheme("dark") : setTheme("light")
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
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/Lorem-Ipsum" element={<LoremIpsum />} />
          <Route path="/Color-Generator" element={<ColorGenerator />} />
          <Route path="/To-Do" element={<ToDo />} />
          <Route path="/Stripe-Submenus" element={<Stripe />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Cocktails" element={<Cocktails />} />
          <Route path="/Cocktails/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ThemeProvider>
    </HashRouter>
  );
}
