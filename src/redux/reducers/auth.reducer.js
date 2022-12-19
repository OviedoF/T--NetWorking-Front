import { AUTH_LOGIN, AUTH_LOGOUT } from "../types";

const initialState = { 
    logged: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case AUTH_LOGIN:
            return {
                logged: true,
                ...action.payload
            };
        case AUTH_LOGOUT:
            return initialState;
        default:
            return state;
}};