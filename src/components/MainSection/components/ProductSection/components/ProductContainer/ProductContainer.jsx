import initialProducts from "../../../../../../data/initialProducts";
import Product from "../Product/Product";

const ProductContainer = () => {
  return (
    <div className="product-grid">
      {initialProducts.map((p) => (
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductContainer;
