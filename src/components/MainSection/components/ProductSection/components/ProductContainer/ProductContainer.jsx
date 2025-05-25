import { useProducts } from "../../../../../../contexts/ProductsContext";
import NotFound from "../NotFound/NotFound";
import Product from "../Product/Product";

const ProductContainer = () => {
  const products = useProducts();
  if (!products.length) {
    return <NotFound />;
  }
  return (
    <div className="product-grid">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductContainer;
