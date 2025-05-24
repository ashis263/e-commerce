const cartReducer = (cart, action) => {
  switch (action.type) {
    case "added": {
      return [...cart, action.product];
    }
    case "removed": {
      return cart.filter((c) => c.id !== action.productId);
    }
  }
};

export default cartReducer;
