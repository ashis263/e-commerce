import CartSection from "./components/CartSection/CartSection";
import ProductSection from "./components/ProductSection/ProductSection";

const MainSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <ProductSection />
      <CartSection />
    </div>
  );
};

export default MainSection;
