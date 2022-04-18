import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  error: "",
  toursData: [],
};

// const url = "https://course-api.com/react-tours-project";
export const url = "https://mshuber1981.github.io/React-JS/tours.json";

export const fetchTours = createAsyncThunk(
  "tours/fetchTours",
  async (thunkApi, { rejectWithValue }) => {
    try {
      const response = await fetch(url).then(function (res) {
        if (!res.ok) {
          throw new Error(res.status);
        } else if (!url) {
          throw new Error("The fetch url is empty...");
        }

        return res;
      });
      const data = await response.json();

      return data;
    } catch (error) {
      const errorMessage = `Error: ${error.message}`;

      return rejectWithValue(errorMessage);
    }
  }
);

export const toursSlice = createSlice({
  name: "tours",
  initialState,
  reducers: {
    setTours: (state, action) => {
      state.toursData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
        state.error = "";
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.toursData = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setTours } = toursSlice.actions;

export const selectIsLoading = (state) => state.tours.isLoading;
export const selectError = (state) => state.tours.error;
export const selectToursData = (state) => state.tours.toursData;

export const removeTour = (id) => (dispatch, getState) => {
  const currentToursData = selectToursData(getState());
  const newToursData = currentToursData.filter((tour) => tour.id !== id);

  dispatch(setTours(newToursData));
};

export default toursSlice.reducer;
