# Project Title

Feastr

## Overview

Feastr is a Tinder-like web app designed to help users discover new restaurants in Calgary. Users can swipe left (pass) or right (like) on restaurants, and when they match with a restaurant, they can view details, including cuisine type, location, and reviews. The app integrates with Google Maps, allowing users to get directions easily. Feastr simplifies decision-making by making restaurant discovery fun and engaging

### Problem Space

Finding a place to eat can be overwhelming with so many choices available. Traditional restaurant discovery apps provide extensive lists but lack an engaging and quick way to browse options. Feastr solves this by offering a swipe-based interface, allowing users to quickly explore and choose restaurants without information overload.

### User Profile

Primary Users:

1/ Food lovers in Calgary looking for new dining experiences
People who struggle with decision fatigue when choosing a place to eat
Groups or couples looking for an easy way to agree on a restaurant

2/ Use Cases:
A user swipes through restaurant options and saves favorites for later.
A couple swipes together to find a place they both like.
A traveler in Calgary uses the app to discover new dining spots quickly.

3/ Special Considerations:
The app should be mobile-friendly for easy swiping.
It should offer cuisine filters to personalize restaurant options.
It must integrate with Google Maps for navigation.

### Features

1/ Swipe to Match – Users can swipe left (pass) or right (like) on restaurants.
2/ Restaurant Profile – Clicking on a matched restaurant shows details such as cuisine type, reviews, and images.
3/ Google Maps Integration – Clicking "Get Directions" opens Google Maps with navigation to the restaurant.
4/ Restaurant Data from API – The app fetches restaurant information from an external API.

## Implementation

### Tech Stack

1/ Frontend: React.js (for an interactive and mobile-friendly UI)
2/ Backend: Node.js + Express.js (to handle API calls and server-side logic)
3/ API for Restaurants: Yelp Fusion API or OpenTable API
4/ Maps Integration: Google Maps API
5/ Hosting: Vercel or Netlify (for deployment)

### APIs

Yelp Fusion API – Provides restaurant listings, ratings, images, and reviews.
Google Maps API – Enables location services and directions.

### Sitemap

Home Swipe interface for browsing restaurants
Restaurant Profile Detailed view of restaurant information
Settings User preferences, such as cuisine filters

### Mockups

Wireframes will be created in Figma to visualize:
Swipe interface
Restaurant profile details
Favorites list
Google Maps integration

### Data

Restaurant Data (from API)
{
"id": "12345",
"name": "Best Burger Calgary",
"cuisine": "American",
"location": "123 4th Ave, Calgary",
"image_url": "https://restaurant-image.jpg",
"rating": 4.5,
"reviews": 150
}

### Endpoints

/restaurants GET Fetch restaurant list from API
/swiped-right POST Log a restaurant that the user swiped right on
/swiped-right GET Retrieve the list of restaurants swiped right

## Roadmap

1 Set up project structure, choose APIs, and create wireframes
2 Build frontend UI (swiping mechanism)
3 Integrate restaurant API & Google Maps
4 Implement filters and user favorites
5 Testing, deployment, and final improvements

---

## Future Implementations

1/ User authentication for personalized recommendations
2/ AI-powered suggestions based on past likes
3/ Social sharing features to help groups decide together
