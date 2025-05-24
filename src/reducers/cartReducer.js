const cartReducer = (cart, action) => {
  switch (action.type) {
    case "added": {
      return [...cart, action.product];
    }
    case "removed": {
      return cart.filter((c) => c.productId !== action.productId);
    }
    case "changed": {
      return cart.map((c) => {
        if (c.productId === action.product.productId) {
          return action.product;
        } else {
          return c;
        }
      });
    }
  }
};

export default cartReducer;
