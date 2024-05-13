function SearchBox({ value, setSearch }) {
  return (
    <div>
      <p>Find contacts:</p>
      <input
        type="text"
        value={value}
        onChange={event => setSearch(event.target.value)}
      />
    </div>
  );
}
export default SearchBox;
