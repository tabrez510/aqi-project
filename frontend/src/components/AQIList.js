import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAQIByCity } from "../features/aqiThunk";
import {
  ListGroup,
  Spinner,
  Alert,
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import "./AQI.css";
import { useNavigate } from "react-router-dom";

const AQIList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, status, error } = useSelector((state) => state.aqi);
  const [city, setCity] = useState("bangalore");

  useEffect(() => {
    dispatch(fetchAQIByCity(city));
  }, [dispatch, city]);

  const handleClick = (stationUrl) => {
    navigate(`/details/${encodeURIComponent(stationUrl)}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(e.target.cityInput.value);
    dispatch(fetchAQIByCity(city));
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

  if (status === "loading") {
    return <Spinner animation="border" />;
  }

  if (status === "failed") {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  return (
    <div>
      <Form onSubmit={handleSearch} className="mb-3">
        <Row className="align-items-center">
          <Col lg={10} className="mb-3 mb-lg-0">
            <FloatingLabel controlId="cityInput" label="Search by City">
              <Form.Control
                type="text"
                defaultValue={city}
                placeholder="Enter city name"
              />
            </FloatingLabel>
          </Col>
          <Col lg={2} className="d-grid">
            <Button size="lg" type="submit" variant="primary" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <ListGroup>
        {data.map((item) => (
          <ListGroup.Item
            key={item.station.url}
            className={`d-flex justify-content-between align-items-center cursor ${getAQIColorClass(
              item.aqi
            )}`}
            onClick={() => handleClick(item.station.url)}
          >
            <span>{item.station.name}</span>
            <span>
              {getAQIText(item.aqi)} - {item.aqi}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default AQIList;
