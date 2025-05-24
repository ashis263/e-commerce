import SectionHeading from "../../../ui/SectionHeading/SectionHeading";
import CartItemContainer from "./components/CartItemContainer/CartItemContainer";
import OrderSummary from "./components/OrderSummary/OrderSummary";

const CartSection = () => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <SectionHeading classNames="mb-6" text="YOUR CART" />
        <CartItemContainer />
        <OrderSummary />
      </div>
    </div>
  );
};

export default CartSection;
