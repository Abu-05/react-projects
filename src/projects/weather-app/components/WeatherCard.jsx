function WeatherCard({ weather }) {
  function getWeatherText(code) {
  if (code === 0) return "Clear sky";
  if (code <= 3) return "Cloudy";
  if (code <= 48) return "Fog";
  if (code <= 67) return "Rain";
  if (code <= 77) return "Snow";
  return "Unknown";
}

  return (
    <div>
      <h3>{weather.city}</h3>
      <p>Temperature: {weather.temp}°C</p>
      <p>Wind Speed: {weather.wind} km/h</p>
      <p>Weather Code: {getWeatherText(weather.condition)}</p>
    </div>
  );
}

export default WeatherCard;
