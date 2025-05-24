import initialProducts from "../../../../../../data/initialProducts";
import CartItem from "../CartItem/CartItem";

const CartItemContainer = () => {
  return (
    <>
      {/* //will be added dynamically */}
      <CartItem item={initialProducts[0]} />
      <CartItem item={initialProducts[1]} />
      <CartItem item={initialProducts[2]} />
    </>
  );
};

export default CartItemContainer;
