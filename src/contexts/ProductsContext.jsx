import { createContext, useContext, useReducer } from "react";
import productsReducer from "../reducers/productsReducer";
import initialProducts from "../data/initialProducts";

const ProductsContext = createContext(null);
const ProductsDispatchContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [products, productsDispath] = useReducer(
    productsReducer,
    initialProducts
  );
  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext value={productsDispath}>
        {children}
      </ProductsDispatchContext>
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

export const useProductsDispatch = () => {
  const context = useContext(ProductsDispatchContext);
  return context;
};
