export const addToCart = (cartItems, itemToAdd) => {
  const existingItems = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItems) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};
