import { SHOPPING_CART_ADD, SHOPPING_CART_REMOVE, SHOPPING_CART_RESET } from "../types";

const initialState = {
    products: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOPPING_CART_ADD:
            return {
                ...state,
                products: [...state.products, action.payload]
            };
        case SHOPPING_CART_REMOVE:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            };
        case SHOPPING_CART_RESET:
            return initialState;
        default:
            return state;
    }
}