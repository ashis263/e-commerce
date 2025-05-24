const productsReducer = (products, action) => {
  switch (action.type) {
    case "changed": {
      return products.map((p) => {
        if (p.id === action.product.id) {
          return action.product;
        } else {
          return p;
        }
      });
    }
    case "searched": {
      const a = action.initialProducts.filter((p) =>
        p.title.toLowerCase().includes(action.searchKey)
      );
      return a;
    }
    case "sorted": {
      const sortby = action.sortBy;
      const copied = products.map((p) => p);
      switch (sortby) {
        case "most-popular": {
          return copied.sort((a, b) => b.rating - a.rating);
        }
        case "newest": {
          return copied.sort(
            (a, b) =>
              new Date(a.addedOn).getTime() - new Date(b.addedOn).getTime()
          );
        }
        case "lowToHigh": {
          return copied.sort((a, b) => a.price - b.price);
        }
        case "highToLow": {
          return copied.sort((a, b) => b.price - a.price);
        }
      }
    }
  }
};

export default productsReducer;
