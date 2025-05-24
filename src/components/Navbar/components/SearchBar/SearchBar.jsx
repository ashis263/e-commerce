import SearchIcon from "../SearchIcon/SearchIcon";

const SearchBar = () => {
  return (
    <div className="relative hidden md:block w-64">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm"
      />
      <span className="absolute right-3 top-2">
        <SearchIcon />
      </span>
    </div>
  );
};

export default SearchBar;
