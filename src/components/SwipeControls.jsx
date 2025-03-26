import React from "react";

const SwipeControls = ({ swipeRestaurant }) => {
  return (
    <div className="swipe-controls">
      <button onClick={() => swipeRestaurant("left")}>Swipe Left</button>
      <button onClick={() => swipeRestaurant("right")}>Swipe Right</button>
    </div>
  );
};

export default SwipeControls;
