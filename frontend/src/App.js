import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AQIListPage from "./pages/aqiListPage";
import AQIDetailsPage from "./pages/aqiDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AQIListPage />} />
          <Route path="/details/:stationUrl" element={<AQIDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
