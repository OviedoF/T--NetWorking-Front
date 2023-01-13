import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../CreateFormSecondStyle.scss'
import env from '../../../env';

const CreateBrandForm = () => {
    const [brand, setBrand] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!brand.name || !brand.images) {
            setError('Todos los campos son obligatorios');
        }

        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', brand.name);
        formData.append('images', brand.images);

        axios.post(`${env.API_URL}/brands`, formData, {
            headers: {
                userid: auth._id,
            }
        })
        .then(response => {
            setIsLoading(false);
            setSuccess(true);
            setError(false);
        })
        .catch(error => {
            setIsLoading(false);
            setError(error.response.data.message);
            setSuccess(false);
        });
    }

    return (
        <form className='create-form'>
            <div className="form_group">
                <label htmlFor="name">Nombre de marca</label>
                <input type="text" className="form-control" id="name" onChange={(e) =>  setBrand({
                    ...brand,
                    name: e.target.value
                })} />
            </div>

            <div className="form_group">
                <label htmlFor="images" className='file_label'>Imágen de marca</label>
                <input type="file" className="form-control" id="images" onChange={(e) => setBrand({
                    ...brand,
                    images: e.target.files[0]
                })}/>

                {brand.images && <img src={URL.createObjectURL(brand.images)} alt="brand" className='preview_image'/>}
            </div>

            {error && <div className="error" role="alert">
                {error}
            </div>}

            {success && <div className="success" role="alert">
                Imágen de marca creada con éxito
            </div>}

            <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Crear</button>
        </form>
    );
}

export default CreateBrandForm;
