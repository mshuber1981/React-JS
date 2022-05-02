// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import loremReducer from "./components/LoremIpsum/loremSlice";
import toursReducer from "./components/Tours/toursSlice";

export const store = configureStore({
  reducer: {
    lorem: loremReducer,
    tours: toursReducer,
  },
});
