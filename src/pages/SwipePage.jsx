import React, { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import SwipeControls from "../components/SwipeControls";

const SwipePage = ({ restaurants }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the swipe action
  const swipeRestaurant = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? 0 : prevIndex - 1));
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 >= restaurants.length
          ? restaurants.length - 1
          : prevIndex + 1
      );
    }
  };

  return (
    <div className="swipe-page">
      <h1>Swipe for Restaurants</h1>

      {restaurants.length > 0 ? (
        <div className="restaurant-card-container">
          <RestaurantCard restaurant={restaurants[currentIndex]} />
        </div>
      ) : (
        <p>No restaurants to swipe through.</p>
      )}

      <SwipeControls swipeRestaurant={swipeRestaurant} />
    </div>
  );
};

export default SwipePage;
