import { Link } from "react-router-dom";
// import products from "../../data/product.json";
import styles from "./ProductList.module.css";
import { useCart } from "../context/ProductProvider";

function ProductList() {
  const { state } = useCart();
  if (!state || !state.products) {
    return <div>Loading...</div>; // Show loading or handle error if data is not available
  }
  const { products } = state;
  console.log(products);
  return (
    <div className={`${styles.section}`}>
      <h1 className={`${styles.h1}`}>Products</h1>
      <ul className={`${styles.underline}`}>
        {products.map((product) => {
          return (
            <li className={`${styles.list}`} key={product.id}>
              <Link className={`${styles.link}`} to={`/product/${product.id}`}>
                {/* <img src={product.image} alt={product.name} /> */}
                <h2>{product.name}</h2>
                <p>${product.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductList;
