// https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-configurestore
import { configureStore } from "@reduxjs/toolkit";
//Reducers
import appReducer from "./appSlice";
import loremReducer from "./components/LoremIpsum/loremSlice";
import toursReducer from "./components/Tours/toursSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    lorem: loremReducer,
    tours: toursReducer,
  },
});
