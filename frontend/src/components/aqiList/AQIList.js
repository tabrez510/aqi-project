import React from "react";
import { useSelector } from "react-redux";
import { Tooltip, OverlayTrigger, ListGroup, Spinner, Alert } from "react-bootstrap";
import "../AQI.css";
import { useNavigate } from "react-router-dom";

const AQIList = () => {
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.aqi);

  const handleClick = (stationUrl) => {
    navigate(`/details/${encodeURIComponent(stationUrl)}`);
  };

  const getAQIColorClass = (aqi) => {
    if (aqi === "-") return;
    if (aqi <= 33) return "aqi-very-good";
    if (aqi <= 66) return "aqi-good";
    if (aqi <= 99) return "aqi-fair";
    if (aqi <= 149) return "aqi-poor";
    if (aqi <= 200) return "aqi-very-poor";
    return "aqi-hazardous";
  };

  const getAQIText = (aqi) => {
    if (aqi === "-") return "N.A";
    if (aqi <= 33) return "Very Good";
    if (aqi <= 66) return "Good";
    if (aqi <= 99) return "Fair";
    if (aqi <= 149) return "Poor";
    if (aqi <= 200) return "Very Poor";
    return "Hazardous";
  };

  if (status === "failed") {
    return <Alert variant="danger">{error}</Alert>;
  }
  return (
    <>
      {status !== "loading" && data && data.length > 0 && (
        <p className="mb-3">
          Found {data.length} results. Click on a station to see full details.
        </p>
      )}
      {status !== "loading" ? (
        <ListGroup>
          {data &&
            data.map((item) => (
              <OverlayTrigger
                key={item.station.url}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${item.station.url}`}>
                    Click to see details
                  </Tooltip>
                }
              >
                <ListGroup.Item
                  className={`d-flex justify-content-between align-items-center cursor ${getAQIColorClass(
                    item.aqi
                  )} list-group-items`}
                  onClick={() => handleClick(item.station.url)}
                >
                  <span>{item.station.name}</span>
                  <span>
                    {getAQIText(item.aqi)} - {item.aqi}
                  </span>
                </ListGroup.Item>
              </OverlayTrigger>
            ))}
        </ListGroup>
      ) : (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
};
export default AQIList;
