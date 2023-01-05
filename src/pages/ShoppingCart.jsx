import React from 'react';
import PaymentOptions from '../components/shoppingCart/PaymentOptions';
import ProductsContainer from '../components/shoppingCart/ProductsContainer';
import { useSelector } from 'react-redux';
import './ShoppingCart.scss'

const ShoppingCart = () => {
    const auth = useSelector(state => state.auth);

    return (
        <main data-animation="appear">
            <h1 style={{textAlign: 'center', margin: '100px 0 50px 0', fontSize: '40px'}}>Tu carrito de compras</h1>

            <div className="container" style={{display: 'flex', padding: '40px', justifyContent: 'space-between'}}>
                <ProductsContainer products={auth.shoppingCart}/>
                <PaymentOptions products={auth.shoppingCart}/>
            </div>
        </main>
    );
}

export default ShoppingCart;
