import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';

const EditNewsForm = ({selectedId, news, setSelectedId}) => {
    const [defaultNew, setDefaultNew] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        const selectedNew = news.find(neww => neww._id === selectedId);
        setDefaultNew(selectedNew);
    }, [selectedId, news]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if(title) formData.append('title', title);
        if(description) formData.append('description', description);
        if(image) formData.append('images', image);

        if(!title && !description && !image) return setError('No ha habido ningún cambio.');
        if(description && description.length > 200) return setError('La descripción debe tener menos de 200 caracteres.');

        axios.put(`${env.API_URL}/news/${defaultNew._id}`, formData, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
            .then(res => {
                setSuccess(true)
                setError(false);
                console.log('hola')
            })
            .catch(err => {
                setError(err.response.data.message)
                setSuccess(false);
            });
    }

    if(defaultNew) return (
        <form action="" id='create-category-form' style={{width: '40%'}}>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="title">Titular de la noticia</label>
                <input defaultValue={defaultNew.title} type="text" name="title" id="title" className="form-control" onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción</label>

                <textarea defaultValue={defaultNew.description} type="text" name="description" id="description" className="form-control" onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="image">Imágen de fondo</label>
                <input type="file" name="image" id="image" className="form-control" onChange={(e) => setImage(e.target.files[0])}/>
            </div>

            <div className="buttons" style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <button style={{width: '48%'}} type="button" className="btn btn-danger" onClick={() => setSelectedId(null)}>CANCELAR</button>
                <button style={{width: '48%'}} type="submit" className="btn btn-primary" onClick={handleSubmit}>EDITAR</button>
            </div>

            {success && <p className="text-success">Noticia editada correctamente.</p>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default EditNewsForm;
