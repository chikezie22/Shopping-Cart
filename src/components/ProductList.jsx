import { Link } from "react-router-dom";
import products from "../../data/product.json";
import styles from "./ProductList.module.css";

function ProductList() {
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
