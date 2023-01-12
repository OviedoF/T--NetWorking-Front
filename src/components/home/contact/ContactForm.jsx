import axios from 'axios';
import React, { useState } from 'react';
import env from '../../../env';

const ContactForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${env.API_URL}/emails/request`, form)
            .then(res => setSuccess(true))
            .catch(err => setError(true));
    }

    return (
        <form action="" className='contact_form' data-animation="appear">
            <div className="" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="form-group" style={{width: '45%'}}>
                    <label htmlFor="name">Nombre</label>
                    <input onChange={(e) => handleChange(e)} className='contact_form_input' type="text" name="name" id="name" placeholder='Ingrese su nombre' />
                </div>
                
                <div className="form-group" style={{width: '45%'}}>
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => handleChange(e)} className='contact_form_input' type="email" name="email" id="email" placeholder='Ingrese su email' />
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="type">Asunto</label>
                <select className='contact_form_input' onChange={(e) => handleChange(e)} name="type" id="type">
                    <option value="Consulta">Consulta</option>
                    <option value="Sugerencia">Sugerencia</option>
                    <option value="Reclamo">Reclamo</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea className='contact_form_input' onChange={(e) => handleChange(e)} name="message" id="message" cols="30" rows="5" placeholder='Ingrese su mensaje'
                style={{height: '80px', padding: 0, margin: 0}}></textarea>
            </div>

            <button type="submit" onClick={(e) => handleSubmit(e)} className='contact_form_button'>Enviar</button>
        </form>
    );
}

export default ContactForm;
