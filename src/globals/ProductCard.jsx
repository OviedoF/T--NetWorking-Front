import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../router/routes';
import './ProductCard.scss'

const formatNumbers = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
}

const ProductCard = ({product, width}) => {
    const cardStyle = {marginLeft: 0, width, color: 'inherit', textDecoration: 'none', margin: 5,
        borderRadius: 5, height: 350,
        border: '1px solid #ccc',
        position: 'relative',
        padding: '10px'
    };

    return (
        <Link to={`${routes.products}/${product._id}`} style={cardStyle}>
            
            {product.priceWithOffer && <div style={{position: 'absolute', top: 0, left: 0, backgroundColor: '#898989', color: 'white', padding: '5px 20px'}}> OFERTA </div>}

            <img src={product.principalImage} alt={product.name} style={{width: '100%', height: '70%', objectFit: 'cover', borderRadius: 5}}/>
            
            <div style={{width: '100%', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <h3 style={{margin: '20px 0', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold'}}>{product.name}</h3>
                
                {!product.priceWithOffer && <p style={{color: 'var(--card-color)', fontSize: 23}}>${product.price}</p>}
                
                {product.priceWithOffer && <p style={{color: 'var(--card-color)', fontSize: 23}}>
                    ${formatNumbers(parseInt(product.priceWithOffer))}
                    <span style={{textDecoration: 'line-through', color: 'var(--card-color)', fontSize: 18, marginLeft: 10}}>${formatNumbers(parseInt(product.price))}</span>
                </p>}
            </div>

        </Link>
    );
}

export default ProductCard;
