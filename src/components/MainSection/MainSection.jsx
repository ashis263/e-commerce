import CartSection from "./components/CartSection/CartSection";
import ProductSection from "./components/ProductSection/ProductSection";
import {CartProvider} from "../../contexts/CartContext";

const MainSection = () => {
  return (
    <CartProvider>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProductSection />
        <CartSection />
      </div>
    </CartProvider>
  );
};

export default MainSection;
