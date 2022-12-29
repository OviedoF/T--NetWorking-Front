import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Presentation from '../components/SingleProduct/Presentation';
import Related from '../components/SingleProduct/Related';
import env from '../env';

const Product = () => {
    const {id} = useParams();
    const [product, setProduct] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get(`${env.API_URL}/product/${id}`)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => {
                if(err.status === 404) {
                    navigate('/404');
                }
                console.log(err);
            })
    }, [id]);

    return (
        <div>
            {product && <Presentation product={product} />}
            {product && <Related category={product.category.name} product_id={id}/>}
        </div>
    );
}

export default Product;
