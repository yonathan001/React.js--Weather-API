import "./App.css";

import React, { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import axios from "axios";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const apiKey = "4c0d02092fc48d924a4d6acc82dc9dca";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError("");
    } catch (err) {
      setWeather(null);
      setError("City not found. Please try again.");
    }
  };

  return (
    <div className="app">
      <h1 className="app-title">Weather App </h1>
      <SearchBar fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;
