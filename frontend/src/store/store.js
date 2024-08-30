import { configureStore } from "@reduxjs/toolkit";
import aqiReducer from "../features/aqiSlice";

const store = configureStore({
  reducer: {
    aqi: aqiReducer,
  },
});

export default store;
