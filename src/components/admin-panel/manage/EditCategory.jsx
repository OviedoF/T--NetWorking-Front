import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';
import axios from 'axios';

const EditCategory = ({categories, selectedId, setSelectedId, actualizeCategories}) => {
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [defaultCategory, setDefaultCategory] = useState(null);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if(name) formData.append('name', name);
        if(image) formData.append('images', image);

        if(!name && !image) return setError('No se han realizado cambios');

        axios.put(`${env.API_URL}/categories/update/${defaultCategory._id}`, formData, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
        .then(res => {
            setSuccess(true)
            setError(false);
        })
        .catch(err => {
            setError('Error al actualizar la categoría');
            setSuccess(false);
        });
    }

    useEffect(() => {
        const category = categories.find(category => category._id === selectedId);
        setDefaultCategory(category);
    }, [selectedId]);

    if(defaultCategory) return (
        <form action="" id='create-category-form'>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input defaultValue={defaultCategory.name} type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imágen</label>
                <input type="file" name="image" id="image" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            <div className="buttons" style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <button style={{width: '48%'}} type="button" className="btn btn-danger" onClick={() => setSelectedId(null)}>CANCELAR</button>
                <button style={{width: '48%'}} type="submit" className="btn btn-primary" onClick={handleSubmit}>EDITAR</button>
            </div>

            {success && <p className="text-success">Categoría editada correctamente.</p>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default EditCategory;
