import React from 'react';
import './ShoppingCart.scss'

const ProductsContainer = ({products}) => {

    if(products.length === 0 ) return (
        <div className='products_container'>
            <h2 style={{textAlign: 'center', margin: '0px 0', fontSize: '40px', fontWeight: '100'}}>No hay productos en tu carrito</h2>
        </div>
    );
    
    if(products && products.length > 0) return (
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

                        <div className="product_info" >
                            <h2 style={{fontSize: '15px', color: 'var(--color-text-card)'}}>{product.name}</h2>
                            <h3 style={{color: 'var(--color-text-card)'}}>${product.price}</h3>
                            <h4 style={{color: 'var(--color-text-card)'}}>{product.quantity}</h4>
                            <h3 style={{color: 'var(--color-text-card)'}}>${(product.price * product.quantity).toFixed(3)}</h3>
                        </div>

                    </div>
                ))
            }        
        </div>
    );
}

export default ProductsContainer;
