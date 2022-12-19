import React from 'react';
import PaymentOptions from '../components/shoppingCart/PaymentOptions';
import ProductsContainer from '../components/shoppingCart/ProductsContainer';

const ShoppingCart = () => {
    return (
        <main data-animation="appear">
            <h1 style={{textAlign: 'center', margin: '50px 0', fontSize: '40px'}}>Tu carrito de compras</h1>

            <div className="container" style={{display: 'flex', padding: '40px', justifyContent: 'space-between'}}>
                <ProductsContainer />
                <PaymentOptions />
            </div>
        </main>
    );
}

export default ShoppingCart;
