const axios = require("axios");
const NodeCache = require("node-cache");

const cacheTTL = parseInt(process.env.CACHE_TTL) || 600;
const maxCacheEntries = parseInt(process.env.MAX_CACHE_ENTRIES) || 100;
const aqiCache = new NodeCache({
  stdTTL: cacheTTL,
  checkperiod: 120,
  maxKeys: maxCacheEntries,
});

const AQICN_API_KEY = process.env.AQICN_API_KEY;
const AQICN_BASE_URL = "https://api.waqi.info/search/";
const AQICN_FEED_URL = "https://api.waqi.info/feed/";

const fetchAQIData = async (city) => {
  const cacheKey = city.toLowerCase();
  const cachedData = aqiCache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await axios.get(`${AQICN_BASE_URL}`, {
      params: {
        token: AQICN_API_KEY,
        keyword: city,
      },
    });

    const data = response.data;

    if (data.status === "error") {
      throw new Error(data.data || "Failed to fetch AQI data");
    }

    aqiCache.set(cacheKey, data);

    return data;
  } catch (error) {
    console.error(`Error fetching AQI data for ${city}:`, error.message);
    throw error;
  }
};

const fetchDetailedAQIData = async (stationUrl) => {
  const cacheKey = `station-${stationUrl}`;
  const cachedData = aqiCache.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await axios.get(`${AQICN_FEED_URL}${stationUrl}/`, {
      params: {
        token: AQICN_API_KEY,
      },
    });

    const data = response.data;

    if (data.status === "error") {
      throw new Error(data.data || "Failed to fetch detailed AQI data");
    }

    aqiCache.set(cacheKey, data);

    return data;
  } catch (error) {
    console.error(
      `Error fetching detailed AQI data for ${stationUrl}:`,
      error.message
    );
    throw error;
  }
};

module.exports = {
  fetchAQIData,
  fetchDetailedAQIData,
};
