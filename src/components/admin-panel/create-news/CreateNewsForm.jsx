import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';

const CreateNewsForm = () => {
    const [form, setForm] = useState({});
    const [image, setImage] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('disclaimer', form.disclaimer);
        formData.append('textButtonOne', form.textButtonOne);
        formData.append('linkButtonOne', form.linkButtonOne);
        formData.append('textButtonTwo', form.textButtonTwo);
        formData.append('linkButtonTwo', form.linkButtonTwo);
        formData.append('images', image);
        formData.append('authorId', auth._id);


        if(!title || !description || !image) return setError('Título, descripción e imágen son requeridos.');
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
        <form action="" id='create-category-form' style={{width: '60%'}}>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="disclaimer">Disclaimer de la noticia</label>
                <p className="disclaimer" style={{color: 'white', fontSize: 13}}>Tal se mostrará arriba del título.</p>

                <input type="text" name="disclaimer" id="disclaimer" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="title">Titular de la noticia</label>

                <input type="text" name="title" id="title" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción</label>

                <textarea type="text" name="description" id="description" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="textButtonOne">Texto botón izquierdo</label>

                <input type="text" name="textButtonOne" id="textButtonOne" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="linkButtonOne">¿A dónde rediccionará el botón izquierdo?</label>

                <input type="text" name="linkButtonOne" id="linkButtonOne" className="form-control" onChange={(e) =>  handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="textButtonTwo">Texto botón derecho</label>

                <input type="text" name="textButtonTwo" id="textButtonTwo" className="form-control" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form-group">
                <label htmlFor="linkButtonTwo">¿A dónde rediccionará el botón derecho?</label>

                <input type="text" name="linkButtonTwo" id="linkButtonTwo" className="form-control" onChange={(e) => handleChange(e)} />
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
