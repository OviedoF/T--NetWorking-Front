import axios from 'axios';
import React, { useState, useEffect } from 'react';
import env from '../../env';
import ProductsFilter from './ProductsFilter';
import ProductCard from '../../globals/ProductCard';
import './ProductsContainer.scss';

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState(false);

    const handleFilters = (e) => {
        e.preventDefault();
        setFilters(true);
    }

    useEffect(() => {
        if(!filters) {
            axios.get(`${env.API_URL}/product`)
                .then(res => setProducts(res.data))
                .catch(err => console.log(err));
        }
    }, []);

    useEffect(() => {
        if(filters){
            axios.get(`${env.API_URL}/product/filters`, filters)
                .then(res => setProducts(res.data))
                .catch(err => console.log(err));
        }
    }, [filters]);

    return (
        <div className='general'>
            <ProductsFilter />

            <div className='products_container' data-animation="appear">
                {products && products.map((el, index) => {
                    return <ProductCard key={index} product={el} width='24%' />
                })}
            </div> 
        </div>
    );
}

export default ProductsContainer;
