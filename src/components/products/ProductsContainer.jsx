import axios from 'axios';
import React, { useState, useEffect } from 'react';
import env from '../../env';
import ProductsFilter from './ProductsFilter';
import ProductCard from '../../globals/ProductCard';
import './ProductsContainer.scss';
import { useSearchParams } from 'react-router-dom';

const ProductsContainer = ({}) => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState(false);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);
    const [categoryQuery, setCategoryQuery] = useState(false);
    const [searchParams] = useSearchParams();

    useEffect(() => {

        if(searchParams.get('category')) { 
            setCategoryQuery(searchParams.get('category'));

            setFilters({
                ...filters,
                categories: [searchParams.get('category')]
            })

            axios.post(`${env.API_URL}/product/filters`, {
                ...filters,
                categories: [searchParams.get('category')]
            })
                .then(res => setProducts(res.data))
                .catch(err => console.log(err));
        }

        window.addEventListener('resize', () => {
            setWindowsSize(window.innerWidth);
            console.log(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        if(filters){
            axios.post(`${env.API_URL}/product/filters`, filters)
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
            <ProductsFilter setFilters={setFilters} setProducts={setProducts} filters={filters}/>

            <div className='products_container' id='products_container' data-animation="appear">
                {products && products.map((el, index) => {
                    return <ProductCard key={index} product={el} width={windowsSize > 500 ? '23%' : '100%'} />
                })}
            </div> 
        </div>
    );
}

export default ProductsContainer;
