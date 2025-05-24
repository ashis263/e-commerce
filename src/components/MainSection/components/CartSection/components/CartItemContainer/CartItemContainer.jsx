import { products } from "../../../../../../data/products";
import CartItem from "../CartItem/CartItem";

const CartItemContainer = () => {
  return (
    <>
      {/* //will be added dynamically */}
      <CartItem item={products[0]} />
      <CartItem item={products[1]} />
      <CartItem item={products[2]} />
    </>
  );
};

export default CartItemContainer;
