import { useState } from "react";
import SearchBox from "./components/SearchBox";
import WeatherCard from "./components/WeatherCard";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  function handleSearch() {
    if (!city) {
      setError("Please enter a city");
      return;
    }

    setWeather({
      city: city,
      temp: 28,
      condition: "Sunny",
      humidity: 60,
    });
    setError("");
  }

  return (
    <div>
      <h2>Weather App</h2>

      <SearchBox
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default WeatherApp;
