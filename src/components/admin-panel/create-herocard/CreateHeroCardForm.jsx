import axios from 'axios';
import React, { useState } from 'react';
import './CreateHeroCardForm.scss';
import { useSelector } from 'react-redux';
import env from '../../../env';

const CreateHeroCardForm = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);
    console.log(auth)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSend = (e) => {
        e.preventDefault();

        if(!form.images || !form.disclaimer || !form.title || !form.description || !form.buttonText || !form.buttonLink) {
            setError('Todos los campos son obligatorios');
            return;
        }

        const formData = new FormData();

        formData.append('images', form.images);
        formData.append('disclaimer', form.disclaimer);
        formData.append('title', form.title);
        formData.append('description', form.description);
        formData.append('buttonText', form.buttonText);
        formData.append('buttonLink', form.buttonLink);

        axios.post(`${env.API_URL}/heroCard`, formData, {
            headers: {
                userid: auth._id
            }
        })
        .then(res => {
            setSuccess('Tarjeta creada correctamente')
            setError(false);
        })
        .catch(err => {
            setError('Ocurrió un error al crear la tarjeta');
            setSuccess(false);
        });

    }

    return (
        <form action="" className='hero_card_form'>
                    <div className="form_group">
                        <label htmlFor="images_herocard" id='select_image_herocard'>Imágen de fondo</label>
                        <input type={'file'} onChange={(e) => setForm({
                            ...form,
                            images: e.target.files[0]
                        })} name='images' id='images_herocard'></input> 

                        {form.images && <p>Archivo seleccionado</p>}
                    </div>

                    <div className="form_group">
                        <label htmlFor="disclaimer">Disclaimer (arriba del título)</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="disclaimer" id="disclaimer" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="title">Título</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="title" id="title" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="description">Descripción</label>
                        <textarea onChange={(e) => handleChange(e)} name="description" id="description" cols="30" rows="10"></textarea>
                    </div>

                    <div className="form_group">
                        <label htmlFor="buttonText">Texto del botón</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="buttonText" id="buttonText" />
                    </div>

                    <div className="form_group">
                        <label htmlFor="buttonLink">Link del botón</label>
                        <input type="text" onChange={(e) => handleChange(e)} name="buttonLink" id="buttonLink" />
                    </div>

                    {error && <p className='error'>{error}</p>}
                    {success && <p className='success'>{success}</p>}

                    <button id="send_herocard" onClick={(e) => handleSend(e)}>Enviar</button>
        </form>
    );
}

export default CreateHeroCardForm;
