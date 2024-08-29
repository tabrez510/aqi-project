const aqiService = require("../services/aqiService");

const getAQIByCity = async (req, res) => {
  const { city } = req.params;

  if (!city) {
    return res.status(400).json({ success: false, message: "City name is required" });
  }

  try {
    const aqiData = await aqiService.fetchAQIData(city);
    res.status(200).json({success: true, aqiData});
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getAQIDetails = async (req, res) => {
    const stationUrl = decodeURIComponent(req.params.stationUrl);
    console.log(stationUrl);
    try {
      const detailedAqiData = await aqiService.fetchDetailedAQIData(stationUrl);
      res.status(200).json(detailedAqiData);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

module.exports = {
  getAQIByCity,
  getAQIDetails
};
// http://localhost:3000/api/aqi/station/india%2Fbangalore%2Fpeenya?token=87b8a9ddf0b023dafb068f951075fd5640cc2751