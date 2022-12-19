import React from 'react';
import { useSelector } from 'react-redux';
import './ShoppingCart.scss'

const ProductsContainer = () => {
    const {products} = useSelector(state => state.shoppingCart);
    
    return (
        <div className='products_container'>
            <div className="info">
                <p>Imágen</p>
                <p>Producto</p>
                <p>Precio individual</p>
                <p>Cantidad</p>
                <p>Total</p>
            </div>

            {
                products.map(product => (
                    <div key={product._id} className='product_card'>
                        <img src={product.principalImage} alt={product.name} />

                        <div className="product_info">
                            <h2 style={{fontSize: '15px'}}>{product.name}</h2>
                            <h3>${product.price}</h3>
                            <h4>{product.quantity}</h4>
                            <h3>${Math.floor(product.price * product.quantity)}</h3>
                        </div>

                    </div>
                ))
            }        
        </div>
    );
}

export default ProductsContainer;
