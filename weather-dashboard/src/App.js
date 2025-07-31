// src/App.js
import React, { useState } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeatherByCity = async (cityName) => {
    if (!cityName) return;
    setLoading(true);
    setError("");
    setWeatherData(null);
    setForecastData([]);

    try {
      // Fetch current weather
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const weather = await weatherRes.json();

      if (weather.cod === "404") {
        setError("City not found.");
        setLoading(false);
        return;
      }

      setWeatherData(weather);

      // Fetch forecast
      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`
      );
      const forecast = await forecastRes.json();

      const dailyForecast = forecast.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);

      setForecastData(dailyForecast);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError("");
    setWeatherData(null);
    setForecastData([]);

    try {
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const weather = await weatherRes.json();
      setWeatherData(weather);

      const forecastRes = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      const forecast = await forecastRes.json();

      const dailyForecast = forecast.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);

      setForecastData(dailyForecast);
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchWeatherByCity(city);
  };

  const handleUseLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByCoords(latitude, longitude);
      },
      () => {
        setError("Unable to retrieve your location.");
      }
    );
  };

  return (
    <div className="app">
      <h1>🌤️ Weather Dashboard</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleUseLocation}>Use My Location</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {weatherData && <WeatherCard data={weatherData} />}
      {forecastData.length > 0 && (
        <div className="forecast-container">
          <h2>3-Day Forecast</h2>
          <div className="forecast-cards">
            {forecastData.map((day, idx) => (
              <ForecastCard key={idx} data={day} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
