const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search Jobs..."
      className="
      w-full
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-4
      outline-none
      "
    />
  );
};

export default SearchBar;
