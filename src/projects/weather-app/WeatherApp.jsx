import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  function handleLocationSearch() {
  if (!navigator.geolocation) {
    setError("Geolocation is not supported by your browser");
    return;
  }

  setLoading(true);
  setError("");
  setWeather(null);

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords;

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const data = await res.json();

        setWeather({
          city: "Your Location",
          temp: data.current_weather.temperature,
          wind: data.current_weather.windspeed,
          condition: data.current_weather.weathercode,
        });
      } catch (err) {
        setError("Failed to fetch weather for your location");
      } finally {
        setLoading(false);
      }
    },
    () => {
      setError("Location permission denied");
      setLoading(false);
    }
  );
}

  async function handleSearch() {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // 1️⃣ Get latitude & longitude from city
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geoData.results[0];

      // 2️⃣ Get weather using coordinates
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: name,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed,
        condition: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Weather App</h2>

      <SearchBox
  city={city}
  setCity={setCity}
  onSearch={handleSearch}
  onLocationSearch={handleLocationSearch}
  loading={loading}
/>


      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default WeatherApp;
