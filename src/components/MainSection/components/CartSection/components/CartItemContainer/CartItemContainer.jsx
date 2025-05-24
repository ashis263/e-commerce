import { useCart } from "../../../../../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

const CartItemContainer = () => {
  const cart = useCart();
  return cart.length > 0 && cart.map((c) => <CartItem key={c.id} item={c} />);
};

export default CartItemContainer;
