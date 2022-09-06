import React from "react";
const DisplayArtists = ({ artists }) => {
  console.log(artists);
  return (
    <div>
      <ul>
        {artists.map((artist) => (
          <div>
            <h2>{artist.rank}</h2>
            <h1>{artist.artist}</h1>
            <h2>{artist.monthlyListeners} M</h2>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayArtists;
