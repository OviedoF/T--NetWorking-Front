import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const ProductCard = ({product, width}) => {
    return (
        <Link to={`${routes.products}/${product._id}`} style={{marginLeft: 0, width, color: 'inherit', textDecoration: 'none', marginBottom: 40, boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        padding: 10}}>
            <img src={product.principalImage} alt={product.name} style={{width: '100%', objectFit: 'contain'}}/>
            <h3 style={{margin: '20px 0', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px'}}>{product.name}</h3>
            <p>${product.price}</p>
        </Link>
    );
}

export default ProductCard;
