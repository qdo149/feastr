import React, { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";

const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const res = await fetch("http://localhost:5001/api/restaurants");
        if (!res.ok) {
          throw new Error("Failed to fetch data from the server");
        }
        const data = await res.json();
        setRestaurants(data.businesses || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch restaurant data.");
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="homepage">
      <h1 className="homepage__title">Feastr - Swipe for Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
