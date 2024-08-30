import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import AQIList from "./components/AQIList";
import AQIDetails from "./components/AQIDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AQIList />} />
          <Route path="/details/:stationUrl" element={<AQIDetails />} />
        </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
