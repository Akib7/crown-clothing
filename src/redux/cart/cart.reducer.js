import { CartActionTypes } from "./cart.types";
import { addToCart } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  catrItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        catrItems: addToCart(state.catrItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
