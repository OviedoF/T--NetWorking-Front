import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const ProductCard = ({product, width}) => {
    return (
        <Link to={`${routes.products}/${product._id}`} style={{marginLeft: 0, width, color: 'inherit', textDecoration: 'none', margin: 5, boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        padding: 0, borderRadius: 5}}>
            <img src={product.principalImage} alt={product.name} style={{width: '100%', height: '50%', objectFit: 'cover', borderRadius: 5}}/>
            <div style={{width: '100%', height: '50%', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <h3 style={{margin: '20px 0', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px'}}>{product.name}</h3>
                <p>${product.price}</p>
            </div>
        </Link>
    );
}

export default ProductCard;
