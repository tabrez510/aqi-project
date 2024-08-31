import { createSlice } from "@reduxjs/toolkit";
import { fetchAQIByCity, fetchAQIDetails } from "./aqiThunk";

const aqiSlice = createSlice({
  name: "aqi",
  initialState: {
    data: [],
    details: null,
    status: "idle",
    error: null,
  },
  reducers: {
    formError(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAQIByCity.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchAQIByCity.fulfilled, (state, action) => {
        state.error = null;
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAQIByCity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchAQIDetails.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchAQIDetails.fulfilled, (state, action) => {
        state.error = null;
        state.status = "succeeded";
        state.details = action.payload;
      })
      .addCase(fetchAQIDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const aqiActions = aqiSlice.actions;
export default aqiSlice.reducer;
