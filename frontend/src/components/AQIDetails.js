import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAQIDetails } from "../features/aqiThunk";
import { useParams } from "react-router-dom";
import { Card, Spinner, Alert } from "react-bootstrap";

const AQIDetails = () => {
  const { stationUrl } = useParams();
  const dispatch = useDispatch();
  const { details, status, error } = useSelector((state) => state.aqi);

  useEffect(() => {
    dispatch(fetchAQIDetails(stationUrl));
  }, [dispatch, stationUrl]);

  if (status === "loading") {
    return <Spinner animation="border" />;
  }

  if (status === "failed") {
    return <Alert variant="danger">{error}</Alert>;
  }

  return details ? (
    <Card>
      <Card.Header>{details.data.city.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>AQI:</strong> {details.data.aqi}
        </Card.Text>
        <Card.Text>
          <strong>Dominant Pollutant:</strong> {details.data.dominentpol}
        </Card.Text>
        <Card.Text>
          <strong>Forecast:</strong>
          {details.data.forecast.daily.pm25.map((item) => (
            <div key={item.day}>
              {item.day}: {item.avg}
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Alert variant="info">No Details Available</Alert>
  );
};

export default AQIDetails;
