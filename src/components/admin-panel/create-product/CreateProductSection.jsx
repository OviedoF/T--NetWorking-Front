import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import env from '../../../env';
import './CreateProductSection.scss';
import routes from '../../../router/routes';
import ProductData from './ProductData';
import SelectCategory from './SelectCategory';
import SelectImages from './SelectImages';
import ColorsData from './ColorsData';
import PriceWithOffer from './PriceWithOffer';

const CreateProductSection = () => {
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({
        colors: [],
    });
    const [principalImageFake, setPrincipalImageFake] = useState(false);
    const [redirecting, setRedirecting] = useState(5);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth)

    useEffect(() => {
        axios.get(`${env.API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => alert('Error al cargar las categorías'));
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.description || !form.category || !form.category || !form.price || !form.stock || !form.principalImage) {
            setError('Todos los campos son obligatorios');
            setSuccess(false);
            return;
        }

        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('description', form.description);
        formData.append('category', form.category);
        formData.append('price', form.price);
        formData.append('stock', form.stock);
        formData.append('images', form.principalImage);
        formData.append('colors', JSON.stringify(form.colors));
        formData.append('requiredQR', JSON.stringify(form.requiredQR));
        formData.append('priceWithOffer', form.priceWithOffer || 0);

        if(form.galleryImages) {
            for (const image of form.galleryImages) {
                formData.append('images', image);
            }
        }

        axios.post(`${env.API_URL}/product/create`, formData, {
            headers: {
                userid: auth._id,
                token: auth.token
            }})
            .then(res => {
                setSuccess(true)
                setError(false);
                setTimeout(() => {
                    window.location.href = routes.adminPanel;
                }, 5000);

                let count = 5;
    
                setInterval(() => {
                    setRedirecting(count - 1);
                }, 1000);
            })
            .catch(err => {
                if(err.status === 400) {
                    setError(err.response.data.message);
                    setSuccess(false);
                    return;
                };

                setError(err.response.data.message)
                setSuccess(false);
            });

    };

    return (
        <div className='create_product_section'>
            <form className='create_product_form' onSubmit={(e) => handleSubmit(e)}>
                <ProductData setForm={setForm} form={form} />
                
                <PriceWithOffer setForm={setForm} form={form} />

                <ColorsData setForm={setForm} form={form} />

                <SelectCategory categories={categories} setForm={setForm} form={form} />

                <SelectImages setForm={setForm} form={form} principalImageFake={principalImageFake} setPrincipalImageFake={setPrincipalImageFake}/>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>CREAR</button>

                {success && <>
                <p className="text-success">Producto creado correctamente.</p>
                <p className="text-success">Redireccionando en {redirecting} segundos...</p>    
            </>}

            {error && <p className="text-danger">{error}</p>}

            </form>
        </div>
    );
}

export default CreateProductSection;
