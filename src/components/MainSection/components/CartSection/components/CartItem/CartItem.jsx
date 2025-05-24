import {
  useCart,
  useCartDispatch,
} from "../../../../../../contexts/CartContext";
import {
  useProducts,
  useProductsDispatch,
} from "../../../../../../contexts/ProductsContext";
import Button from "../../../../../ui/Button/Button";
import ProductPrice from "../../../../../ui/ProductPrice/ProductPrice";
import ProductTitle from "../../../../../ui/SectionHeading/ProductTitle/ProductTitle";

const CartItem = ({ item }) => {
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const products = useProducts();
  const productsDispatch = useProductsDispatch();

  const { productId, title, image, price, quantity } = item;

  const product = products.find((p) => p.id === productId);
  const initialStock = cart.find((c) => c.productId === productId).totalStock;

  const handleIncrement = () => {
    if (quantity < initialStock) {
      cartDispatch({
        type: "changed",
        product: {
          ...item,
          quantity: quantity + 1,
        },
      });
      productsDispatch({
        type: "changed",
        product: {
          ...product,
          totalStock: product.totalStock - 1,
        },
      });
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      cartDispatch({
        type: "changed",
        product: {
          ...item,
          quantity: quantity - 1,
        },
      });
      productsDispatch({
        type: "changed",
        product: {
          ...product,
          totalStock: product.totalStock + 1,
        },
      });
    }
  };

  const handleRemove = () => {
    cartDispatch({
      type: "removed",
      productId: product.id,
    });
    productsDispatch({
      type: "changed",
      product: {
        ...product,
        totalStock: cart.find((c) => c.productId === product.id).totalStock,
      },
    });
  };

  return (
    <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
      <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-auto object-cover" />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between">
          <ProductTitle text={title} />
          <span
            onClick={handleRemove}
            className="text-red-500 text-sm cursor-pointer"
          >
            ×
          </span>
        </div>
        {/* size color will also be modified later */}
        <p className="text-sm text-gray-500">Size: Large</p>
        <p className="text-sm text-gray-500">Color: White</p>
        <div className="flex justify-between items-center mt-2">
          <ProductPrice price={quantity * price} />
          <div className="flex items-center space-x-2">
            <Button
              variant="cart-quantity"
              clickHander={handleDecrement}
              content="-"
            />
            <span className="text-sm">{quantity}</span>
            <Button
              variant="cart-quantity"
              clickHander={handleIncrement}
              content="+"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
