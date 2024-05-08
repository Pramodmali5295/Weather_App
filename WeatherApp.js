// Weather.js
import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'; 
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');

  const API_KEY = 'ff1cc82a12d4ee004fc71fd60cbb5060'; 
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message, error.response);
    }
  };

  return (
    <div className="weather-container">
      <h2>Weather App</h2>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeatherData}>Get Weather</button>

      {weatherData && (
        <div className="weather-info">
          <h3>{weatherData.name}, {weatherData.sys.country}</h3>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
