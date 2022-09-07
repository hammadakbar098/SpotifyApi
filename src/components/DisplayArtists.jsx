import React, { useEffect } from "react";
import "./DisplayArtists.css";
import Aos from "aos";
import "aos/dist/aos.css";

const DisplayArtists = ({ artists }) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="gridContainer reveal">
      {artists.map((artist, index) => (
        <div key={index} data-aos="zoom-in-up" className="card">
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
