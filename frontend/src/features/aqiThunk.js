import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch AQI data
const BASE_URL = 'http://localhost:3000/api'
export const fetchAQIByCity = createAsyncThunk(
  "aqi/fetchAQIByCity",
  async (city, {rejectWithValue}) => {
    try{
      const response = await axios.get(`${BASE_URL}/aqi/${city}`);
      return response.data.aqiData.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

// Async thunk to fetch detailed AQI data
export const fetchAQIDetails = createAsyncThunk(
  "aqi/fetchAQIDetails",
  async (stationUrl, {rejectWithValue}) => {
    try{
      const response = await axios.get(
        `${BASE_URL}/station/${encodeURIComponent(stationUrl)}`
      );
      return response.data;
    } catch(err) {
      rejectWithValue(err.message);
    }
  }
);
