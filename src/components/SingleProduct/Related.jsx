import React, { useEffect, useState } from 'react';
import axios from 'axios';
import env from '../../env';
import './Related.scss';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';

const Related = ({category, product_id}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${env.API_URL}/product/category/${category}`)
            .then(res => {
                const related = res.data.filter(el => el._id !== product_id);
                setProducts(related);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='related_container'>
            <h2>Productos relacionados</h2>

            <div className="related">
                {products.length > 0 && products.map((el, index) => {
                    return (
                        <Link to={`${routes.products}/${el._id}`} key={index} className='related__item'>
                            <img src={el.principalImage} alt={el.name} />
                            <h3 className='related__item__name'>{el.name}</h3>
                            <p>${el.price}</p>
                        </Link>
                    )
                })}
            </div>

        </div>
    );
}

export default Related;
