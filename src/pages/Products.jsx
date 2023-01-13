import React, { useState, useEffect } from 'react';
import ProductsContainer from '../components/products/ProductsContainer';
import ContactContainer from '../components/home/contact/ContactContainer';

const Products = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <ProductsContainer />
            <ContactContainer />
        </div>
    );
}

export default Products;
