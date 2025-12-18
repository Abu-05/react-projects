function SearchBox({ city, setCity, onSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBox;
