import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  textData: [],
};

export const loremSlice = createSlice({
  name: "lorem",
  initialState,
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    setTextData: (state, action) => {
      state.textData = action.payload;
    },
  },
});

export const { setCount, setTextData } = loremSlice.actions;

export const selectCount = (state) => state.lorem.count;
export const selectTexData = (state) => state.lorem.textData;

export default loremSlice.reducer;
