export const addToCart = (cartItems, itemToAdd) => {
  const existingItems = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItems) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id
        ? { ...cartItems, quantity: cartItems.quantity + 1 }
        : cartItems
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
