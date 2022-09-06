import React, { Component } from "react";
import axios from "axios";
import DisplayArtists from "./DisplayArtists";
import "./GettingData.css";
const options = {
  headers: {
    "X-RapidAPI-Key": "3c91dd1586mshd22f0295ff54a14p1f6dbbjsn984dc07bb1ad",
    "X-RapidAPI-Host": "spotify81.p.rapidapi.com",
  },
};
const apiEndpoint =
  "https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners";
class GettingData extends Component {
  state = {
    artists: [],
  };
  async componentDidMount() {
    const { data } = await axios.get(apiEndpoint, options);
    this.setState({ artists: data });
  }
  render() {
    const { artists } = this.state;
    return (
      <>
        <div>
          <h1 className="gradient-text">
            This months top 20 streamed artists{" "}
          </h1>
        </div>
        <div>
          <DisplayArtists artists={artists} />
        </div>
      </>
    );
  }
}

export default GettingData;
