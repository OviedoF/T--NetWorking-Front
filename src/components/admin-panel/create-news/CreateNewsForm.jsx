import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';

const CreateNewsForm = () => {
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('images', image);
        formData.append('authorId', auth._id);

        if(!title || !description || !image) return setError('Todos los campos son obligatorios.');
        if(description.length > 200) return setError('La descripción debe tener menos de 200 caracteres.');

        axios.post(`${env.API_URL}/news`, formData, {
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
            setError(err.response.data.message)
            setSuccess(false);
        });
    }

    return (
        <form action="" id='create-category-form' style={{width: '40%'}}>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="title">Titular de la noticia</label>

                <input type="text" name="title" id="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción</label>

                <textarea type="text" name="description" id="description" className="form-control" onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imágen de fondo</label>
                <input type="file" name="image" id="image" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>CREAR</button>

            {success && <p className="text-success">Noticia creada correctamente.</p>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default CreateNewsForm;
