import React from "react";
import "./weather.css";

const Currentweather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img className="weather-icon" src="images/01d.png" alt="weather" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="row">
            <span className="label">Details 🎯</span>
          </div>
          <div className="row">
            <span className="label">Feels Like</span>
            <span className="value">22°C</span>
          </div>
          <div className="row">
            <span className="label">Wind</span>
            <span className="value">2m/s</span>
          </div>
          <div className="row">
            <span className="label">Humidity</span>
            <span className="value">20%</span>
          </div>
          <div className="row">
            <span className="label">Pressure</span>
            <span className="value">22 hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currentweather;
