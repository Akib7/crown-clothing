export const addToCart = (cartItems, itemToAdd) => {
  const existingItems = cartItems.find((item) => item.id === itemToAdd.id);

  if (existingItems) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const removeFromCart = (cartItems, itemToRemove) => {
  // const remove = quantity => {
  //   return (quantity > 0 ? quantity - 1 : )
  // }

  const existingItems = cartItems.find((item) => item.id === itemToRemove.id);

  if (existingItems.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  }
  return cartItems.map((item) =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
