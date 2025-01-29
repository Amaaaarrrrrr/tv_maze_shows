import React, { useState } from "react";

function FavoriteList({ shows }) {
  // Initialize the state for the list of favorite shows (an empty array initially)
  const [favorites, setFavorites] = useState([]);

  // Function to handle adding/removing a show from favorites
  const toggleFavorite = (show) => {
    setFavorites((prevFavorites) => {
      // Check if the show is already in the favorites list
      const isFavorite = prevFavorites.some((favorite) => favorite.id === show.id);
      
      // If the show is in the list, remove it; otherwise, add it
      if (isFavorite) {
        return prevFavorites.filter((favorite) => favorite.id !== show.id);
      } else {
        return [...prevFavorites, show];
      }
    });
  };

  return (
    <div>
      <h2>Your Favorite TV Shows</h2>
      <ul>
        {/* Render the favorite TV shows */}
        {favorites.length === 0 ? (
          <p>No favorites selected yet.</p>
        ) : (
          favorites.map((show) => (
            <li key={show.id}>
              {show.name}{" "}
              {/* Button to remove the show from favorites */}
              <button onClick={() => toggleFavorite(show)}>Remove from Favorites</button>
            </li>
          ))
        )}
      </ul>

      <h3>All TV Shows</h3>
      <ul>
        {/* Render the list of all available TV shows */}
        {shows.map((show) => (
          <li key={show.id}>
            {show.name}{" "}
            {/* Button to add the show to favorites */}
            <button onClick={() => toggleFavorite(show)}>
              {favorites.some((favorite) => favorite.id === show.id)
                ? "Remove from Favorites"
                : "Add to Favorites"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteList;
