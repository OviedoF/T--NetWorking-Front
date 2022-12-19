// AUTH ->
export const AUTH_LOGIN = 'AUTH_LOGIN'; // Nos permite iniciar sesión del usuario
export const AUTH_LOGOUT = 'AUTH_LOGOUT'; // Nos permite cerrar la sesión del usuario

// UI ->
export const UI_LOADING = 'UI_LOADING'; // Nos permite saber si la aplicación está cargando o no
export const UI_ERROR = 'UI_ERROR'; // Nos permite saber si mostrar o no un mensaje de error
export const UI_SUCCESS = 'UI_SUCCESS'; // Nos permite saber si mostrar o no un mensaje de éxito
export const UI_RESET = 'UI_RESET'; // Nos permite resetear los mensajes de error, éxito y loading

// SHOPPING CART -> 
export const SHOPPING_CART_ADD = 'SHOPPING_CART_ADD'; // Nos permite agregar un producto al carrito de compras
export const SHOPPING_CART_REMOVE = 'SHOPPING_CART_REMOVE'; // Nos permite eliminar un producto del carrito de compras
export const SHOPPING_CART_RESET = 'SHOPPING_CART_RESET'; // Nos permite resetear el carrito de compras