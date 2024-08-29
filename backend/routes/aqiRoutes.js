const express = require("express");
const aqiControllers = require("../controllers/aqiController");

const router = express.Router();

router.get("/aqi/:city", aqiControllers.getAQIByCity);
router.get("/aqi/station/:stationUrl", aqiControllers.getAQIDetails);

module.exports = router;
