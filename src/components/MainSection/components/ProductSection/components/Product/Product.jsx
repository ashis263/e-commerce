import Button from "../../../../../ui/Button/Button";
import ProductPrice from "../../../../../ui/ProductPrice/ProductPrice";
import ProductTitle from "../../../../../ui/SectionHeading/ProductTitle/ProductTitle";
import Rating from "../Rating/Rating";
import {
  useCart,
  useCartDispatch,
} from "../../../../../../contexts/CartContext";
import { useProductsDispatch } from "../../../../../../contexts/ProductsContext";
import findNextId from "../../../../../../utils/findNextId";

const Product = ({ product }) => {
  const cart = useCart();
  const cartDispatch = useCartDispatch();
  const productsDispatch = useProductsDispatch();

  const { id, title, image, rating, price, totalStock } = product;

  const handleClick = () => {
    //if product doesn't have a truthy isAddedToCart value, we will add to cart else we will remove from cart 
    if (!product?.isAddedToCart) {
      cartDispatch({
        type: "added",
        product: {
          ...product,
          id: findNextId(cart),
          productId: id,
          quantity: 1,
        },
      });
      productsDispatch({
        type: "changed",
        product: {
          ...product,
          totalStock: totalStock - 1,
          //after adding to cart we will add a isAddedToCart property in the product with a truthy value
          isAddedToCart: true,
        },
      });
    } else {
      cartDispatch({
        type: "removed",
        productId: id,
      });
      productsDispatch({
        type: "changed",
        product: {
          ...product,
          totalStock: cart.find((c) => c.productId === id).totalStock,
          //after removing from cart we will set isAddedToCart property in the product with a falsy value
          isAddedToCart: false,
        },
      });
    }
  };

  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <ProductTitle text={title} />
        <div className="flex items-center justify-between">
          <Rating rating={rating} />
          <span className="text-xs text-gray-700">{`(${totalStock} pcs left)`}</span>
        </div>
        <ProductPrice price={price} />
        <Button
          clickHander={handleClick}
          variant={product?.isAddedToCart ? "secondary" : "primary"}
          content={product?.isAddedToCart ? "Remove from Cart" : "Add to cart"}
          disabled={!totalStock && !product?.isAddedToCart}
        />
      </div>
    </div>
  );
};

export default Product;
