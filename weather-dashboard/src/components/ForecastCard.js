// src/components/ForecastCard.js
import React from "react";
import "./ForecastCard.css";

function ForecastCard({ data }) {
  const date = new Date(data.dt_txt).toLocaleDateString(undefined, {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="forecast-card">
      <h4>{date}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt={data.weather[0].description}
      />
      <p>{data.weather[0].main}</p>
      <p className="temp">{Math.round(data.main.temp)}°C</p>
    </div>
  );
}

export default ForecastCard;
