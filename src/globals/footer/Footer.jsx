import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer data-animation="appear">
            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Ubicación de tienda</h3>
                </div>

                <div className="footer_section_content">
                    <p>Av. Siempre Viva 742</p>
                    <p>Springfield</p>
                    <p>EEUU</p>
                    <p>info@misitio.com</p>
                    <p>+52-1-33-123455678</p>

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
                    <p>Tarjetas de presentación</p>
                    <p>Tarjetas de madera</p>
                    <p>Tarjetas de PVC</p>
                    <p>Tarjetas de Metal</p>
                    <p>Tags</p>
                    <p>Biznes Band</p>
                    <p>Accesorios</p>
                </div>
            </div>

            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Atención al cliente</h3>
                </div>

                <div className="footer_section_content">
                    <p>Contáctanos</p>
                    <p>Asistencia</p>
                    <p>Acerca de</p>
                </div>
            </div>

            <div className="footer_section">
                <div className="footer_section_title">
                    <h3>Política</h3>
                </div>

                <div className="footer_section_content">
                    <p>Envío y devoluciones</p>
                    <p>Términos y condiciones</p>
                    <p>Métodos de pago</p>
                    <p>FAQ</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
