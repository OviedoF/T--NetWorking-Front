import React from 'react';
import ContactForm from './ContactForm';

const ContactContainer = () => {
    return (
        <div style={{display: 'flex', padding: '60px', justifyContent: 'space-between'}} data-animation="appear">
            <img src="https://via.placeholder.com/150" alt="placeholder" className='image_form' style={{width: '49%'}} />

            <ContactForm />
        </div>
    );
}

export default ContactContainer;
