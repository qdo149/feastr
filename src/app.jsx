import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route
import Homepage from "./pages/Homepage";
import SwipePage from "./pages/SwipePage";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:5001/api/restaurants");
      const data = await response.json();
      setRestaurants(data.businesses);
    };

    fetchRestaurants();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage restaurants={restaurants} />} />
        <Route
          path="/swipe"
          element={<SwipePage restaurants={restaurants} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
