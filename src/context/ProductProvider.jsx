import { createContext, useContext, useReducer } from "react";
import products from "../../data/product.json";
import { cartReducer } from "../reducers/cartReducer";

const initialState = {
  products,
  cart: [],
};

const ProductContext = createContext();
function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function useCart() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error(`Product context used outside Product Provider`);
  return context;
}

export { ProductProvider, useCart };
