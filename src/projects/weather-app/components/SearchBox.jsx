function SearchBox({ city, setCity, onSearch, onLocationSearch, loading }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />

      <button onClick={onSearch} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </button>

      <button onClick={onLocationSearch} disabled={loading}>
        Use My Location
      </button>
    </div>
  );
}

export default SearchBox;