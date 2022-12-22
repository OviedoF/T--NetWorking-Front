import React from 'react';
import ContactForm from './ContactForm';
import contactImage from '../../../assets/contact.png';

const ContactContainer = () => {
    return (
        <div style={{display: 'flex', padding: '60px', justifyContent: 'space-between'}} data-animation="appear">
            <img src={contactImage} alt="placeholder" className='image_form' style={{width: '49%'}} />

            <ContactForm />
        </div>
    );
}

export default ContactContainer;
