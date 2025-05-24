import Button from "../../../../../ui/Button/Button";
import CartCalculation from "../../../CartSection/components/CartCalculation/CartCalculation";
import Promo from "../Promo/Promo";

const OrderSummary = () => {
  //will pass this as content of checkout button
  const checkoutLink = (
    <a href="#">
      Go to Checkout
      <span className="inline-block ml-2">→</span>
    </a>
  );

  return (
    <div>
      <div className="mt-6">
        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <CartCalculation />
        <Promo />
        <Button variant="checkout" content={checkoutLink} />
      </div>
    </div>
  );
};

export default OrderSummary;
