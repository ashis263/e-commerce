import { products } from "../../../../../../data/products";
import Product from "../Product/Product";

const ProductContainer = () => {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductContainer;
