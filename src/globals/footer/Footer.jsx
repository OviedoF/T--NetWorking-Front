import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import env from '../../env';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';
import './Footer.scss';

const Footer = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${env.API_URL}/networking`).then((response) => {
            setData(response.data);
        })
            .catch((err) => {
                setError(true);
        });

        axios.get(`${env.API_URL}/categories`).then((response) => {
            setCategories(response.data);
        })
            .catch((err) => {
                setError(true);
        });

    }, []);

    return (
        <footer data-animation="appear">
            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Ubicación de tienda</h3>
                </div>

                <div className="footer_section_content">
                    <p>{data.street}</p>
                    <p>{data.city}</p>
                    <p>{data.region}</p>
                    <p>{data.email}</p>
                    <p>{data.phone}</p>

                    <div className="footer_section_content_social">
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                </div>
            </div>

            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Tienda</h3>
                </div>

                <div className="footer_section_content">
                    {categories.map((category) => {
                        return (
                            <Link key={category.id} to={`${routes.products}?category=${category.name}`}>
                                {category.name}
                            </Link>
                        );
                    }   
                    )}
                </div>
            </div>

            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Atención al cliente</h3>
                </div>

                <div className="footer_section_content">
                    <Link to={`${routes.home}#contact_form_container`}>Contáctanos</Link>
                    <Link to={`${routes.aboutWe}#contact_form_container`}>Sobre nosotros</Link>
                </div>
            </div>

            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Política</h3>
                </div>

                <div className="footer_section_content">
                    <Link to={routes.termsAndConditions}>Envío y devoluciones</Link>
                    <Link to={routes.termsAndConditions}>Términos y condiciones</Link>
                    <Link to={routes.termsAndConditions}>Métodos de pago</Link>
                    <Link to={routes.faqs}>FAQ</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
