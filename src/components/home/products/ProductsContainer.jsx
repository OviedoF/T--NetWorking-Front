import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import { ThreeCircles } from 'react-loader-spinner';
import colors from '../../../styles/colors';
import CategoriesPicker from './CategoriesPicker';
import ProductCard from '../../../globals/ProductCard';

const ProductsContainer = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [categorySelected, setCategorySelected] = useState(undefined);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);

    useEffect(() => {
        setIsLoading(true);

        axios.get(`${env.API_URL}/product`)
            .then(res => setProducts(res.data))
            .catch(err => {
                console.log(err);
                setIsError(true);
            });
        
        axios.get(`${env.API_URL}/categories`)
            .then(res => setCategories(res.data))
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
            <CategoriesPicker windowsSize={windowsSize} categories={categories} setCategorySelected={setCategorySelected}/>

            <div className="products_container" style={{display: 'flex', padding: '40px', justifyContent: 'flex-start', flexWrap: 'wrap', width: '100%'}}>
                {products.map(product => {
                    if(categorySelected === undefined) {
                        return (
                            <ProductCard key={product.id} product={product} width={windowsSize > 500 ? '20%' : '100%'}/>
                        );
                    } else {
                        if(product.category === categorySelected) {
                            return (
                                <ProductCard key={product.id} product={product} width={windowsSize > 500 ? '20%' : '100%'}/>
                            );
                        }
                    }
                })}
            </div>
        </div>
    );
}

export default ProductsContainer;
