import React from 'react';

const CardModalNav = ({setSection, section}) => {
    return (
        <div className='card_modal_nav'>
            <h3>Navegación</h3>

            <ul>
                <li className={section === 'data' ? 'active' : ''} onClick={() => setSection('data')}>
                    Datos
                </li>

                <li className={section === 'socialMedia' ? 'active' : ''} onClick={() => setSection('socialMedia')}>
                    Redes sociales
                </li>

                <li className={section === 'design' ? 'active' : ''} onClick={() => setSection('design')}>
                    Diseño
                </li>

                <li className={section === 'finish' ? 'active' : ''} onClick={() => setSection('finish')}>
                    Finalizar
                </li>
            </ul>
        </div>
    );
}

export default CardModalNav;
