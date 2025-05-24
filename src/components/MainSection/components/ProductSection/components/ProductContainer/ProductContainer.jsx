import { useProducts } from "../../../../../../contexts/ProductsContext";
import Product from "../Product/Product";

const ProductContainer = () => {
  const products = useProducts();
  return (
    <div className="product-grid">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductContainer;
