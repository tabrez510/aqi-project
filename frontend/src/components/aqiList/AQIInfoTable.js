import React from "react";
import { Table } from "react-bootstrap";
import "../AQI.css";

const AQIInfoTable = () => {
  const aqiData = [
    { level: "Very Good", range: "0-33", action: "Enjoy activities", class: "aqi-very-good" },
    { level: "Good", range: "34-66", action: "Enjoy activities", class: "aqi-good" },
    {
      level: "Fair",
      range: "67-99",
      action:
        "People unusually sensitive to air pollution: Plan strenuous outdoor activities when air quality is better",
      class: "aqi-fair",
    },
    {
      level: "Poor",
      range: "100-149",
      action:
        "AIR POLLUTION HEALTH ALERT: Sensitive groups should cut back or reschedule strenuous outdoor activities",
      class: "aqi-poor",
    },
    {
      level: "Very Poor",
      range: "150-200",
      action:
        "AIR POLLUTION HEALTH ALERT: Sensitive groups should avoid strenuous outdoor activities. Everyone should cut back or reschedule strenuous outdoor activities.",
      class: "aqi-very-poor",
    },
    {
      level: "Hazardous",
      range: "200+",
      action:
        "AIR POLLUTION HEALTH ALERT: Sensitive groups should avoid all outdoor physical activities. Everyone should significantly cut back on outdoor physical activities.",
      class: "aqi-hazardous",
    },
  ];

  return (
    <>
    <h5 style={{fontFamily: "'Playfair Display', serif", marginTop: "40px"}}>AQI bands, with health advice for each:</h5>
    <Table bordered hover>
      <thead>
        <tr>
          <th>AQI Level</th>
          <th>AQI Range</th>
          <th>Recommended Actions</th>
        </tr>
      </thead>
      <tbody>
        {aqiData.map((row, index) => (
          <tr key={index}>
            <td className={row.class}>{row.level}</td>
            <td className={row.class}>{row.range}</td>
            <td>{row.action}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
};

export default AQIInfoTable;
