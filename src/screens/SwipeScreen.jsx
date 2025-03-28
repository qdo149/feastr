import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantCard from "../components/RestaurantCard";
import "../styles/SwipeScreen.scss";

function SwipeScreen() {
  const [restaurants, setRestaurants] = useState([]);
  const [index, setIndex] = useState(0);
  const [likedRestaurants, setLikedRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      try {
        const response = await axios.get(
          "http://localhost:5001/api/restaurants"
        );
        setRestaurants(response.data);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    }
    fetchRestaurants();
  }, []);

  const handleLike = (restaurant) => {
    setLikedRestaurants([...likedRestaurants, restaurant]);
    nextRestaurant();
  };

  const handleDislike = () => {
    nextRestaurant();
  };

  const nextRestaurant = () => {
    if (index < restaurants.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="swipe-container">
      <h2>Find Your Next Meal!</h2>
      {restaurants.length > 0 ? (
        <RestaurantCard
          restaurant={restaurants[index]}
          onLike={handleLike}
          onDislike={handleDislike}
        />
      ) : (
        <p>Loading restaurants...</p>
      )}
    </div>
  );
}

export default SwipeScreen;
