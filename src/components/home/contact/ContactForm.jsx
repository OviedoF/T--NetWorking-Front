import React from 'react';

const ContactForm = () => {
    return (
        <form action="" className='contact_form' data-animation="appear">
            <div className="" style={{display: 'flex', justifyContent: 'space-between'}}>
                <div className="form-group" style={{width: '45%'}}>
                    <label htmlFor="name">Nombre</label>
                    <input className='contact_form_input' type="text" name="name" id="name" placeholder='Ingrese su nombre' />
                </div>
                
                <div className="form-group" style={{width: '45%'}}>
                    <label htmlFor="email">Email</label>
                    <input className='contact_form_input' type="email" name="email" id="email" placeholder='Ingrese su email' />
                </div>

            </div>

            <div className="form-group">
                <label htmlFor="type">Asunto</label>
                <select className='contact_form_input' name="type" id="type">
                    <option value="1">Consulta</option>
                    <option value="2">Sugerencia</option>
                    <option value="3">Reclamo</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea className='contact_form_input' name="message" id="message" cols="30" rows="5" placeholder='Ingrese su mensaje'
                style={{height: '80px', padding: 0, margin: 0}}></textarea>
            </div>

            <button type="submit" className='contact_form_button'>Enviar</button>
        </form>
    );
}

export default ContactForm;
