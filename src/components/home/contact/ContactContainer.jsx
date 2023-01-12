import React from 'react';
import ContactForm from './ContactForm';
import contactImage from '../../../assets/contact.png';
import './ContactForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}} className="contact_container" data-animation="appear">
            <div className="contact_we">
                <h2>Contáctanos!</h2>

                <ul>
                    <li><a href="">Whatsapp</a></li>
                    <li><a href="">+56 1111111</a></li>
                    <li>info@biznes.cl</li>
                </ul>

                <div className="social">
                    <FontAwesomeIcon icon={faWhatsapp} height={50} />
                    <FontAwesomeIcon icon={faFacebook} height={50} />
                    <FontAwesomeIcon icon={faTwitter} height={50} />
                    <FontAwesomeIcon icon={faLinkedin} height={50} />
                    <FontAwesomeIcon icon={faInstagram} height={50} />
                </div>
            </div>

            <ContactForm />
        </div>
    );
}

export default ContactContainer;
