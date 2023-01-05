import React from 'react';
import './DesignForm.scss';
import ButtonsContactDesign from './DesignForm/ButtonsContactDesign';
import PreviewHeaderDesign from './DesignForm/PreviewHeaderDesign';
import SocialButtonsDesign from './DesignForm/SocialButtonsDesign';
import UserDataDesign from './DesignForm/UserDataDesign';

const DesignForm = () => {
    return (
        <form className='design_form'>
            <PreviewHeaderDesign />

            <UserDataDesign />

            <ButtonsContactDesign />

            <SocialButtonsDesign />

            <div className="form_buttons">
                <button className='btn btn--primary'>Volver al estilo predeterminado</button>
                <button className='btn btn--primary'>Restaurar colores de redes sociales</button>
                <button className='btn btn--primary'>Guardar</button>
            </div>
        </form>
    );
}

export default DesignForm;
