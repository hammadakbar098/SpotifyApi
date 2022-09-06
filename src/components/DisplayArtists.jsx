import React from "react";
import "./DisplayArtists.css";
const DisplayArtists = ({ artists }) => {
  console.log(artists);
  return (
    <div className="gridContainer">
      {artists.map((artist) => (
        <div className="card">
          <span className="align-text">
            <h2>{artist.rank}</h2>
            <h1>{artist.artist}</h1>
          </span>
          <h2 className="ml">{artist.monthlyListeners} million streams</h2>
        </div>
      ))}
    </div>
  );
};

export default DisplayArtists;
