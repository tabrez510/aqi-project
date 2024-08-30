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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAQIByCity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAQIByCity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAQIByCity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchAQIDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAQIDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.details = action.payload;
      })
      .addCase(fetchAQIDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default aqiSlice.reducer;
