import { useProductsDispatch } from "../../../../contexts/ProductsContext";
import initialProducts from "../../../../data/initialProducts";
import SearchIcon from "../SearchIcon/SearchIcon";

const SearchBar = () => {
  const productDispatch = useProductsDispatch();
  const handleSearch = (e) => {
    productDispatch({
      type: "searched",
      searchKey: e.target.value.toLowerCase(),
      initialProducts
    });
  };
  return (
    <div className="relative hidden md:block w-64">
      <input
        type="text"
        onChange={handleSearch}
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
