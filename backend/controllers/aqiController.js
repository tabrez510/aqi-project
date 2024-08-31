const aqiService = require("../services/aqiService");

const getAQIByCity = async (req, res) => {
  const { city } = req.params;

  if (!city) {
    return res
      .status(400)
      .json({ success: false, message: "City name is required." });
  }

  try {
    const aqiData = await aqiService.fetchAQIData(city);
    res.status(200).json({ success: true, data: aqiData });
  } catch (error) {
    console.error(`Failed to fetch AQI data: ${error.message}`);

    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

const getAQIDetails = async (req, res) => {
  const stationUrl = decodeURIComponent(req.params.stationUrl);

  if (!stationUrl) {
    return res
      .status(400)
      .json({ success: false, message: "Station URL is required." });
  }

  try {
    const detailedAqiData = await aqiService.fetchDetailedAQIData(stationUrl);
    res.status(200).json({ success: true, data: detailedAqiData });
  } catch (error) {

    console.error(`Failed to fetch detailed AQI data: ${error.message}`);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch detailed AQI data.",
    });
  }
};

module.exports = {
  getAQIByCity,
  getAQIDetails,
};
