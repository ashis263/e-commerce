import ProductContainer from "./components/ProductContainer/ProductContainer";
import ProductsTopBar from "./components/ProductsTopBar/ProductsTopBar";

const ProductSection = () => {
  return (
    <div className="lg:col-span-2">
      <ProductsTopBar />
      <ProductContainer/>
    </div>
  );
};

export default ProductSection;
