import React from "react";
import { Link } from "react-router-dom";

const WeatherButton = (props) => {
  const weather = props.weather; {
    return (
      <Link to="/about" className="buttonlink">
        <button className="one">Info</button>
      </Link>
    );
  } 
};

export default Weather;
