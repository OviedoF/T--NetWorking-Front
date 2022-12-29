import axios from 'axios';
import React, { useState, useEffect } from 'react';
import env from '../../env';
import ProductsFilter from './ProductsFilter';
import ProductCard from '../../globals/ProductCard';
import './ProductsContainer.scss';

const ProductsContainer = ({}) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState(false);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);

    const handleFilters = (e) => {
        e.preventDefault();
        setFilters(true);
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowsSize(window.innerWidth);
            console.log(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        if(filters){
            axios.get(`${env.API_URL}/product/filters`, filters)
                .then(res => setProducts(res.data))
                .catch(err => console.log(err));
        }

        if(!filters) {
            axios.get(`${env.API_URL}/product`)
                .then(res => setProducts(res.data))
                .catch(err => console.log(err));
        }
    }, [filters]);

    return (
        <div className='general'>
            <ProductsFilter setFilters={setFilters} setProducts={setProducts}/>

            <div className='products_container' data-animation="appear">
                {products && products.map((el, index) => {
                    return <ProductCard key={index} product={el} width={windowsSize > 500 ? '23%' : '100%'} />
                })}
            </div> 
        </div>
    );
}

export default ProductsContainer;
