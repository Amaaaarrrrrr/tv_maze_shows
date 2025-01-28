// work here andrew
import React from "react";


const ShowList = ({ shows, onFavoriteToggle, onMoreDetails }) => {
  return (
    <div className="show-list">
      {shows.map((show) => (
        <ShowCard key={show.id} show={show} onFavoriteToggle={onFavoriteToggle} onMoreDetails={onMoreDetails} />
      ))}
    </div>
  );
};

export default ShowList;