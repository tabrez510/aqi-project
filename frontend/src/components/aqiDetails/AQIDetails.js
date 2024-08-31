import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAQIDetails } from "../../features/aqiThunk";
import { useParams } from "react-router-dom";
import { Card, Spinner, Alert, Row, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../AQI.css";

const AQIDetails = () => {
  const { stationUrl } = useParams();
  const dispatch = useDispatch();
  const { details, status, error } = useSelector((state) => state.aqi);

  useEffect(() => {
    dispatch(fetchAQIDetails(stationUrl));
  }, [dispatch, stationUrl]);

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

  const getForecastData = (key) => {
    const forecastData = details.data.forecast.daily[key];
    return {
      labels: forecastData.map((item) => item.day),
      datasets: [
        {
          label: `Daily ${key.toUpperCase()} Levels (Average)`,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
          hoverBackgroundColor: "rgba(75,192,192,0.6)",
          hoverBorderColor: "rgba(75,192,192,1)",
          data: forecastData.map((item) => item.avg),
        },
      ],
    };
  };

  if (status === "loading") {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  if (status === "failed") {
    return <Alert variant="danger">{error}</Alert>;
  }

  return details ? (
    <Card className="mb-3">
      <Card.Header className={`${getAQIColorClass(details.data.aqi)}`} style={{fontFamily: "'Playfair Display', serif"}}>
        <h4>{details.data.city.name}</h4>
      </Card.Header>
      <Card.Body>
        <Row className="mb-3">
          <Col md={6}>
            <Card.Text as="h5" style={{fontFamily: "'Playfair Display', serif", fontWeight: '800'}}>
              AQI: {details.data.aqi}{" "}
              <span
                className={`p-2 ms-2 ${getAQIColorClass(details.data.aqi)}`}
              >
                {getAQIText(details.data.aqi)}
              </span>
            </Card.Text>
            <Card.Text>
              <strong>Dominant Pollutant:</strong>{" "}
              {details.data.dominentpol === "pm25"
                ? "PM2.5"
                : details.data.dominentpol}
            </Card.Text>
            <Card.Text>
              <strong>Updated Time (IST):</strong>{" "}
              {details.data.time && details.data.time.s}
            </Card.Text>
            <Card.Text>
              <strong>PM2.5:</strong>{" "}
              {details.data.iaqi.pm25 && details.data.iaqi.pm25.v}
            </Card.Text>
            <Card.Text>
              <strong>PM10:</strong>{" "}
              {details.data.iaqi.pm10 && details.data.iaqi.pm10.v}
            </Card.Text>
            <Card.Text>
              <strong>O3:</strong>{" "}
              {details.data.iaqi.o3 && details.data.iaqi.o3.v}
            </Card.Text>
            <Card.Text>
              <strong>NO2:</strong>{" "}
              {details.data.iaqi.no2 && details.data.iaqi.no2.v}
            </Card.Text>
          </Col>
          <Col md={6}>
            <Card.Text>
              <strong>SO2:</strong>{" "}
              {details.data.iaqi.so2 && details.data.iaqi.so2.v}
            </Card.Text>
            <Card.Text>
              <strong>CO:</strong>{" "}
              {details.data.iaqi.co && details.data.iaqi.co.v}
            </Card.Text>
            <Card.Text>
              <strong>Temp:</strong>{" "}
              {details.data.iaqi.t && details.data.iaqi.t.v}
            </Card.Text>
            <Card.Text>
              <strong>Pressure:</strong>{" "}
              {details.data.iaqi.p && details.data.iaqi.p.v}
            </Card.Text>
            <Card.Text>
              <strong>Humidity:</strong>{" "}
              {details.data.iaqi.h && details.data.iaqi.h.v}
            </Card.Text>
            <Card.Text>
              <strong>Wind:</strong>{" "}
              {details.data.iaqi.w && details.data.iaqi.w.v}
            </Card.Text>
          </Col>
        </Row>
        <h5 style={{fontFamily: "'Playfair Display', serif", fontWeight: '800'}}>Forecast Data</h5>
        <Row>
          {details.data.forecast.daily && (
            <Col xl={6} className="mb-4">
              <Bar data={getForecastData("pm10")} />
            </Col>
          )}
          {details.data.forecast.daily && (
            <Col xl={6}>
              <Bar data={getForecastData("pm25")} />
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  ) : (
    <Alert variant="info">No Details Available</Alert>
  );
};

export default AQIDetails;
