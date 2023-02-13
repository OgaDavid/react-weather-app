import React from "react";
import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const weekDay = new Date().getDay();
  const forecastDays = days
    .slice(weekDay, days.length)
    .concat(days.slice(0, weekDay));
  console.log(forecastDays);
  return (
    <section className='forecast-section'>
      <h2 className="title">Daily Forecast ⚡☔</h2>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="forecast-item">
                    <img
                      src={`images/${item.weather[0].icon}.png`}
                      alt="forecast"
                    />
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="temp-range">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="forecast-panel">
                  <div className="forecast-panel-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                  <div className="forecast-panel-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="forecast-panel-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="forecast-panel-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="forecast-panel-item">
                    <label>Sea Level</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="forecast-panel-item">
                    <label>Wind</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default Forecast;
