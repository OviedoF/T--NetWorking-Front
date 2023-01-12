import axios from 'axios';
import React, { useState } from 'react';
import env from '../../../env';
import './CreateFAQForm.scss'

const CreateFAQForm = ({auth}) => {
    const [form, setForm] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSend = (e) => {
        e.preventDefault();
        setIsLoading(true);

        if(!form.question || !form.answer) return setError('Debes completar todos los campos');

        axios.post(`${env.API_URL}/faqitem`, form, {
            headers: {
                userid: auth._id,
            }
        })
        .then(res => {
            console.log(res);
            setSuccess(true);
            setIsLoading(false);
            setError(false);
        })
        .catch(err => {
            console.log(err);
            setError('Ha ocurrido un error, inténtalo de nuevo');
            setSuccess(false);
            setIsLoading(false);
        })
    }

    return (
        <form className='faq_form'>
            <div className="form_group">
                <label htmlFor="question">Pregunta</label>
                <input type="text" name="question" id="question" onChange={(e) => handleChange(e)} />
            </div>

            <div className="form_group">
                <label htmlFor="answer">Respuesta</label>
                <textarea name="answer" id="answer" cols="30" rows="10" onChange={(e) => handleChange(e)}></textarea>
            </div>

            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>Pregunta creada con éxito</p>}

            <button onClick={(e) => handleSend(e)}>Enviar</button>
        </form>
    );
}

export default CreateFAQForm;
