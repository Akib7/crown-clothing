import { createSelector } from "reselect";

// It takes an input and an output selector. The input selector
//does not need the 'createSelector', but the output selector does.

const selectCart = (state) => state.cart; //input selector
// const selectUser = (state) => state.user; //input selector

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
); // create selector gets two args, 1. the collection/array of inputSelectors not necessarily always inputSelector,
// 2. A function that will return a value we want out of the selctor.

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
