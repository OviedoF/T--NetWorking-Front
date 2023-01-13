import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import ContactForm from './ContactForm';
import contactImage from '../../../assets/contact.png';
import './ContactForm.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactContainer = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`${env.API_URL}/networking`).then((response) => {
            setData(response.data);
        })
            .catch((err) => {
                setError(true);
            });
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}} className="contact_container" data-animation="appear"
        id='contact_form_container'>
            <div className="contact_we">
                <h2>Contáctanos!</h2>

                <ul>
                    <li><a target='_blank' href={data.whatsApp}>Whatsapp</a></li>
                    <li><a target='_blank' href={`tel: ${data.phone}`}>{data.phone}</a></li>
                    <li>{data.email}</li>
                </ul>

                <div className="social">
                    <a target='_blank' href={data.facebook}><FontAwesomeIcon icon={faFacebook} height={50} /></a>
                    <a target='_blank' href={data.twitter}><FontAwesomeIcon icon={faTwitter} height={50} /></a>
                    <a target='_blank' href={data.whatsApp}><FontAwesomeIcon icon={faWhatsapp} height={50} /></a> 
                    <a target='_blank' href={data.instagram}><FontAwesomeIcon icon={faInstagram} height={50} /></a>
                    <a target='_blank' href={data.linkedin}><FontAwesomeIcon icon={faLinkedin} height={50} /></a>
                </div>
            </div>

            <ContactForm />
        </div>
    );
}

export default ContactContainer;
