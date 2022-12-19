import { SHOPPING_CART_ADD, SHOPPING_CART_REMOVE, SHOPPING_CART_RESET } from "../types";

export const addToShoppingCart = (product) => {
    return {
        type: SHOPPING_CART_ADD,
        payload: product
    };
}

export const removeFromShoppingCart = (productId) => {
    return {
        type: SHOPPING_CART_REMOVE,
        payload: productId
    };
}

export const resetShoppingCart = () => {
    return {
        type: SHOPPING_CART_RESET
    };
}