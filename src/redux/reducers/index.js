import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import shoppingCartReducer from "./shoppingCart.reducer";

const reducer = combineReducers({
    auth: authReducer,
    shoppingCart: shoppingCartReducer
});
 
export default reducer;
