import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AQIList from "./components/AQIList";
import AQIDetails from "./components/AQIDetails";

const App = () => {
  return (

      <Router>
        <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AQIList />} />
          <Route path="/details/:stationUrl" element={<AQIDetails />} />
        </Routes>
        </div>
      </Router>

  );
};

export default App;
