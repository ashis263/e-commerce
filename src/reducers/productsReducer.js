const productsReducer = (products, action) => {
    switch(action.type){
        case "changed": {
            return products.map(p => {
                if(p.id === action.product.id){
                    return action.product;
                }else{
                    return p;
                }
            })
    }
}
}

export default productsReducer;
