import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import { ThreeCircles } from 'react-loader-spinner';
import colors from '../../../styles/colors';
import CategoriesPicker from './CategoriesPicker';
import ProductCard from '../../../globals/ProductCard';
import { Link } from 'react-router-dom';

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);

    useEffect(() => {
        setIsLoading(true);

        axios.get(`${env.API_URL}/product`)
            .then(res => {
                const productsWithOffer = res.data.filter(product => product.priceWithOffer);

                setProducts(productsWithOffer);
            })
            .catch(err => {
                console.log(err);
                setIsError(true);
            });

        setIsLoading(false);

        window.addEventListener('resize', () => {
            setWindowsSize(window.innerWidth);
            console.log(window.innerWidth);
        });

    }, []);

    if(isLoading) return (
        <div>
            <ThreeCircles
                height={100}
                width={100}
                color={colors.grey}
                loading={isLoading}
            />
        </div>
    )

    if(isError) return (
        <div>
            <h1>Something went wrong</h1>
        </div>
    )

    return (
        <div>
            <h2 style={{textAlign: 'center', fontSize: 40, marginTop: 30}}>¡Aprovecha nuestro descuento de lanzamiento!</h2>

            <div className="products_container" style={{display: 'flex', padding: '40px', justifyContent: 'flex-start', flexWrap: 'wrap', width: '100%'}}>
                {products.map((product, index) => {
                    if(index <= 5) {
                        return (
                            <ProductCard key={product.id} product={product} width={windowsSize > 500 ? '19%' : '100%'}/>
                        );
                    }
                })}
            </div>

            <Link to="/products" style={{display: 'flex', cursor: 'pointer', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: 30, textDecoration: 'none'}}>
                <button style={{width: 200, height: 50, cursor: 'pointer', fontSize: 20, backgroundColor: 'var(--card-color)', color: colors.white, border: 'none', borderRadius: 50}}>Ver todo</button>
            </Link>

        </div>
    );
}

export default ProductsContainer;
