import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../actions/cartActions";

export function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case REMOVE_FROM_CART:
      const itemToRemove = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemToRemove && itemToRemove.quantity > 1) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      }

    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
}
