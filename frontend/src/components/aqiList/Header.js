import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="mb-3 text-center" style={{fontFamily: "'Playfair Display', serif"}}>Welcome to AQI Tracker</h1>
      <p className="mb-5">
        Monitor real-time air quality across different cities. Find the current
        AQI, understand the dominant pollutants, and get detailed forecasts to
        stay safe and healthy.
      </p>
    </>
  );
};
export default Header;
