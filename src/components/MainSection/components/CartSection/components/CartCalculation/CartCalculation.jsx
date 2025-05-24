import { useCart } from "../../../../../../contexts/CartContext";

const CartCalculation = () => {
  const cart = useCart();

  const cartTotalAmount = cart.reduce(
    (initial, current) => initial + current.price * current.quantity,
    0
  );

  const discount = (cartTotalAmount * 20) / 100;
  const grossAmount = cartTotalAmount + 15 - discount;

  return (
    <div className="space-y-2 mb-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">${cartTotalAmount}</span>
      </div>
      <div className="flex justify-between text-red-500">
        <span>Discount (-20%)</span>
        <span>-${discount}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Delivery Fee</span>
        {/* if cart is empty no delivery charge will be shown */}
        <span className="font-medium">${cart.length ? 15 : 0}</span>
      </div>
      <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
        <span>Total</span>
        {/* if cart is empty no amount will be shown */}
        <span>${cart.length ? grossAmount : 0}</span>
      </div>
    </div>
  );
};

export default CartCalculation;
