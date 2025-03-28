import React from "react";
import PropTypes from "prop-types";
import "../styles/SwipeScreen.scss"; // Import styles

function RestaurantCard({ restaurant, onLike, onDislike }) {
  if (!restaurant) return <p>No more restaurants to show!</p>;

  return (
    <div className="restaurant-card">
      <img src={restaurant.image_url} alt={restaurant.name} width="100%" />
      <h2>{restaurant.name}</h2>
      <p>{restaurant.cuisine}</p>
      <button className="like-btn" onClick={() => onLike(restaurant)}>
        ❤️ Like
      </button>
      <button className="dislike-btn" onClick={onDislike}>
        👎 Dislike
      </button>
    </div>
  );
}

RestaurantCard.propTypes = {
  restaurant: PropTypes.object,
  onLike: PropTypes.func.isRequired,
  onDislike: PropTypes.func.isRequired,
};

export default RestaurantCard;
