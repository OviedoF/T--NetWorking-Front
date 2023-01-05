import React, { useState } from 'react';
import './DesignForm.scss';
import ButtonsContactDesign from './DesignForm/ButtonsContactDesign';
import PreviewHeaderDesign from './DesignForm/PreviewHeaderDesign';
import SocialButtonsDesign from './DesignForm/SocialButtonsDesign';
import UserDataDesign from './DesignForm/UserDataDesign';
import CardDataContext from './CardData.provider';
import { useContext } from 'react';
import SaveStyleModal from './DesignForm/SaveStyleModal';

const DesignForm = () => {
    const { resetStyles, resetSocialColors } = useContext(CardDataContext);
    const [saving, setSaving] = useState(false);

    return (
        <form className='design_form'>
            <PreviewHeaderDesign />

            <UserDataDesign />

            <ButtonsContactDesign />

            <SocialButtonsDesign />

            {
                saving && <SaveStyleModal setSaving={setSaving}/>
            }

            <div className="form_buttons">
                <button onClick={(e) => resetStyles(e)} className='btn btn--primary'>Volver al estilo predeterminado</button>
                <button onClick={(e) => resetSocialColors(e)} className='btn btn--primary'>Restaurar colores de redes sociales</button>
                
                <button onClick={(e) => {
                    e.preventDefault();
                    setSaving(true);
                }} className='btn btn--primary' >Guardar</button>
            </div>
        </form>
    );
}

export default DesignForm;
