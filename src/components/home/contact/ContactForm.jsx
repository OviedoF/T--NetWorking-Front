import React from 'react';
import './ContactForm.scss'

const ContactForm = () => {
    return (
        <form action="" className='contact_form' data-animation="appear">
            <h4 className='contact_form_title'>Formulario de contacto</h4>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input className='contact_form_input' type="text" name="name" id="name" placeholder='Ingrese su nombre' />
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className='contact_form_input' type="email" name="email" id="email" placeholder='Ingrese su email' />
            </div>

            <div className="form-group">
                <label htmlFor="type">Asunto</label>
                <select className='contact_form_input' name="type" id="type" style={{width: '103%'}}>
                    <option value="1">Consulta</option>
                    <option value="2">Sugerencia</option>
                    <option value="3">Reclamo</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea className='contact_form_input' name="message" id="message" cols="30" rows="10" placeholder='Ingrese su mensaje'></textarea>
            </div>

            <button type="submit" className='contact_form_button'>Enviar</button>
        </form>
    );
}

export default ContactForm;
