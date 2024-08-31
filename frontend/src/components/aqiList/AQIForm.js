import React from "react";
import { Form, FloatingLabel, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAQIByCity } from "../../features/aqiThunk";
import { aqiActions } from "../../features/aqiSlice";
import "../AQI.css";

const AQIForm = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.cityInput.value;
    if(!city){
      dispatch(aqiActions.formError("Please enter city name"));
      return;
    }
    dispatch(fetchAQIByCity(city));
    e.target.cityInput.value = "";
  };
  return (
    <Form onSubmit={handleSearch} className="mb-3" style={{fontFamily: "'Playfair Display', serif"}}>
      <Row className="align-items-center">
        <Col lg={10} className="mb-3 mb-lg-0">
          <FloatingLabel controlId="cityInput" label="Search by City">
            <Form.Control type="text" placeholder="Enter city name" />
          </FloatingLabel>
        </Col>
        <Col lg={2} className="d-grid">
          <Button size="lg" type="submit" variant="primary" className="w-100">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AQIForm;
