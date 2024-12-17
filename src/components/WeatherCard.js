import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="weather-card">
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels Like: {weather.main.feels_like}°C</p>
      <p>Weather: {weather.weather[0].description}</p>
      <p>Humidity: {weather.main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;
