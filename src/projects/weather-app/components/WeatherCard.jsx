function WeatherCard({ weather }) {
  return (
    <div>
      <h3>{weather.city}</h3>
      <p>Temperature: {weather.temp}°C</p>
      <p>Condition: {weather.condition}</p>
      <p>Humidity: {weather.humidity}%</p>
    </div>
  );
}

export default WeatherCard;
