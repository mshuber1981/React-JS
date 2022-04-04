import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    openSideBar: (state) => {
      state.isSideBarOpen = !state.isSideBarOpen;
    },
    closeSideBar: (state) => {
      state.isSideBarOpen = false;
    },
  },
});

export const { openSideBar, closeSideBar } = appSlice.actions;

export const selectIsSideBarOpen = (state) => state.app.isSideBarOpen;

export default appSlice.reducer;
