// src/components/WeatherCard.js
import React from "react";
import "./ForecastCard.css";

function WeatherCard({ data }) {
  const { name, weather, main } = data;

  if (!data || !weather || !main) return null;

  return (
    <div className="forecast-card">
      <h4>{name}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather[0].description}
      />
      <p>{weather[0].main}</p>
      <p className="temp">{Math.round(main.temp)}°C</p>
    </div>
  );
}

export default WeatherCard;
