import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import env from '../../env';
import './ShoppingCart.scss'
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/actions/auth.actions';

const ProductsContainer = ({products}) => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    console.log(auth)

    const handleRemoveFromCart = (product) => {
        axios.put(`${env.API_URL}/users/${auth._id}/updateShoppingCart`, {
            type: 'remove',
            product
        })
        .then(res => {
            console.log(res.data);
            axios.post(`${env.API_URL}/auth/login/identifyUser`, {
                token: auth.token
            })
                .then(res => dispatch(authLogin({
                    ...res.data,
                    token: auth.token
                })))
                .catch(err => console.log(err))

        } )
        .catch(err => {
            console.log(err);
        })


    }

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
                        <button onClick={(e) => {
                            handleRemoveFromCart(product);
                        }} className='quit_from_cart'>

                            Quitar del carrito

                        </button>

                        <img src={product.principalImage} alt={product.name} />

                        <div className="product_info" >
                            <h2 style={{}}>{product.name}</h2>
                            <h3 style={{}}>${product.price}</h3>
                            <h4 style={{}}>{product.quantity}</h4>
                            <h3 style={{}}>${(product.price * product.quantity).toFixed(3)}</h3>
                        </div>

                    </div>
                ))
            }        
        </div>
    );
}

export default ProductsContainer;
