import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';

const CreateCategoryForm = () => {
    const [name, setName] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('images', image);

        if(!name || !image) return setError('Todos los campos son obligatorios.');

        axios.post(`${env.API_URL}/categories`, formData, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
        .then(res => setSuccess(true))
        .catch(err => setError(err.response.data.message));
    }

    return (
        <form action="" id='create-category-form'>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imágen</label>
                <input type="file" name="image" id="image" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>CREAR</button>

            {success && <p className="text-success">Categoría creada correctamente.</p>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default CreateCategoryForm;
