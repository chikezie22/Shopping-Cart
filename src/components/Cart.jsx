import { useCart } from "../context/ProductProvider";

function Cart() {
  const { state } = useCart();
  const { cart } = state;
  console.log(cart[0]);
  const totalPrice = Number(cart[0].price) * Number(cart[0].quantity);
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <h2>
          Your {cart[0].name} item cost {cart[0].price}
        </h2>
        <p>
          Total price is {cart[0].price} X {cart[0].quantity} ={" "}
          {` $${totalPrice}`}{" "}
        </p>
      </div>
    </div>
  );
}

export default Cart;
