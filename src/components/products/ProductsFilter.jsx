import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './ProductsFilter.scss';
import env from '../../env';
import CategoryFilter from './CategoryFilter';
import PricesFilter from './PricesFilter';

const ProductsFilter = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filter, setFilter] = useState({});
    console.log('a');
  
    useEffect(() => {
      axios
        .get(`${env.API_URL}/categories`)
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
    }, []);
  
    const handleChange = (name, value) => {
      setFilter({
        ...filter,
        [name]: value
      })
    }
  
    const handleSubmit = () => {
      axios.post(`${env.API_URL}/products/filters`, filter)
        .then(res => setProducts(res.data))
        .catch(e => console.log(e));
    }

    return (
        <section style={{ marginTop: "30px" }} className={'filters'}>
          <h1>Todos Los Productos</h1>

          <div className={'filter_categories'}>
            <p>CATEGORÍA</p>

            <CategoryFilter categories={categories} handleChange={handleChange} />
          </div>

          <div className={'filter_prices'}>
            <p>PRECIO</p>

            <PricesFilter handleChange={handleChange}/>
          </div>

          <div className={'actions_filters'}>
            <button className={'clear'}>Limpiar filtros</button>
            <button className={'goFilter'} onClick={() => handleSubmit()}>Filtrar</button>
          </div>
        </section>
    );
}

export default ProductsFilter;
