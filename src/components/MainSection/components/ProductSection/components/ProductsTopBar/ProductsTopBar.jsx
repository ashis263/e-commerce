import { useProductsDispatch } from "../../../../../../contexts/ProductsContext";
import SectionHeading from "../../../../../ui/SectionHeading/SectionHeading";

const ProductsTopBar = () => {
  const productsDispatch = useProductsDispatch();
  const handleSort = (e) => {
    productsDispatch({
      type: "sorted",
      sortBy: e.target.value,
    });
  };
  return (
    <div className="flex items-center justify-between mb-6">
      <SectionHeading text="Your Products" />
      <div className="flex items-center space-x-2">
        <span className="text-sm">Sort by:</span>
        <select
          onChange={handleSort}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option disabled selected></option>
          <option value="most-popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default ProductsTopBar;
