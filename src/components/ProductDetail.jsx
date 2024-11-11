import { useParams } from "react-router-dom";
import { useCart } from "../context/ProductProvider"; // To access the product list
import styles from "./ProductDetail.module.css";
import { addToCart } from "../actions/cartActions";

function ProductDetail() {
  const { id } = useParams(); // Get product ID from URL params
  const { state, dispatch } = useCart(); // Get products from context
  const { products, cart } = state; // Destructure products from state

  // Find the product by ID
  const product = products.find((prod) => prod.id === parseInt(id)); // Convert id to number if needed

  // If product not found, show a "not found" message
  if (!product) {
    return <div>Product not found</div>;
  }

  const add = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.container}>
      <button>{cart.length} items in cart</button>
      {cart.map((product) => (
        <li key={product.id}>
          <h2>
            {product.quantity} x {product.name} ready for checkout
          </h2>
        </li>
      ))}

      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      {/* Optionally, you can add product image */}
      <div className={styles.checkout}>
        <button onClick={() => add(product)}>Add to Cart</button>
        <button>Remove from cart</button>
        <button>Checkout</button>
      </div>
    </div>
  );
}

export default ProductDetail;
