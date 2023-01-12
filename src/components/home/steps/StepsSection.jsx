import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './StepsSection.scss';
import { faGlobe, faIdCard, faIdCardClip, faUser, faChevronRight, faShareNodes, faAddressBook, faImagePortrait } from '@fortawesome/free-solid-svg-icons';
import routes from '../../../router/routes';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StepsSection = () => {
    const auth = useSelector(state => state.auth);
    return (
        <div id='steps_section'>
            <div className="step_card">
                <div className="step_card__header">
                    <FontAwesomeIcon icon={faUser} color={'black'}/>
                    <Link to={routes.register}>Crea tu cuenta</Link>
                </div>

                <div className="step_card__body">
                    <p>
                    Registrarte gratis y obtén tu tarjeta digital en instantes. Puedes adquirir nuestras membresías PRO y VIP para obtener opciones de diseño y atributos adicionales.
                    </p>
                </div>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="step_card__icon" />

            <div className="step_card">
                <div className="step_card__header">
                    <FontAwesomeIcon icon={faImagePortrait}/>
                    <Link to={auth.logged ? routes.dashboard : routes.login}>Diseña tu tarjeta digital</Link>
                </div>

                <div className="step_card__body">
                    <p>
                    Edita tus datos, colores y diseña tu tarjeta como más te guste, agrega tus redes sociales, webpage y otra información.                     </p>
                </div>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="step_card__icon" />

            <div className="step_card">
                <div className="step_card__header">
                    <FontAwesomeIcon icon={faIdCardClip} />
                    <Link to={routes.products}>Compra tu tarjeta física</Link>
                </div>

                <div className="step_card__body">
                    <p>
                    Compra con nosotros tu tarjeta física con código QR o tecnología contactless. Puedes escoger nuestras tarjetas eco-friendly o tradicionales.
                    </p>
                </div>
            </div>

            <FontAwesomeIcon icon={faChevronRight} className="step_card__icon" />

            <div className="step_card">
                <div className="step_card__header">
                    <FontAwesomeIcon icon={faShareNodes} />
                    <Link to={routes.home}>Comparte tus datos</Link>
                </div>

                <div className="step_card__body">
                    <p>
                    Usa nuestros productos y comparte tus datos de contacto mediante el código qr o la tecnología contactless de biznes. ¡Así de simple!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StepsSection;
