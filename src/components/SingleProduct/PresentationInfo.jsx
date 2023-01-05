import axios from 'axios';
import React, { useState, useEffect, useReducer } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToShoppingCart } from '../../redux/actions/shoppingCart.actions';
import routes from '../../router/routes';
import env from '../../env';
import {authLogin} from '../../redux/actions/auth.actions';


const PresentationInfo = ({product}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    const shoppingCart = useSelector(state => state.shoppingCart);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const navigate= useNavigate();
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (auth.logged) {
            const isAdded = auth.shoppingCart.find(el => el._id === product._id);
            if(isAdded) setIsAddedToCart(true);
        }
    }, [shoppingCart]);

    useEffect(() => {
        if(quantity <  1) setQuantity(product.stock)
        if(quantity > product.stock) setQuantity(1)
    }, [quantity]);

    const handleAddToCart = () => {
        axios.put(`${env.API_URL}/users/${auth._id}/updateShoppingCart`, {
            type: 'add',
            product: JSON.stringify({...product, quantity})
        })
        .then(res => dispatch(authLogin(res.data)))
        .catch(err => console.log(err));

        dispatch(addToShoppingCart({...product, quantity}));
    }

    return (
        <div className='presentation__info' >
            <b data-animation="appear">{product.category.name}</b>
            <h1 data-animation="appear">{product.name}</h1>
            <b data-animation="appear">{product.price}</b>
            <p data-animation="appear">{product.description}</p>

            {!isAddedToCart && auth.logged && <div className='presentation__info__quantity' data-animation="appear">
                <button onClick={() => setQuantity(quantity - 1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>}

            <div className='presentation__info__buttons'>
                {!isAddedToCart && auth.logged ? <button className='btn btn--primary' data-animation="appear" onClick={() => handleAddToCart()}>Agregar al carrito</button>
                : auth.logged && <button className='btn btn--primary' data-animation="appear" onClick={() => navigate(routes.cart)}>Ver carrito</button>}

                {!auth.logged && <button className='btn btn--primary' data-animation="appear" onClick={() => navigate(routes.login)}>Iniciar sesión</button>}
            </div>
        </div>
    );
}

export default PresentationInfo;
