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
            <h2 style={{fontWeight: 'bold', fontSize: 30}}>DISEÑO DE SU TARJETA VIRTUAL</h2>

            <PreviewHeaderDesign />

            <UserDataDesign />

            <ButtonsContactDesign />

            <SocialButtonsDesign />

            {
                saving && <SaveStyleModal setSaving={setSaving}/>
            }

            <div className="form_buttons">
                <button  style={{backgroundColor: '#ccc', color: 'black', fontSize: 16}} onClick={(e) => resetStyles(e)} className='btn btn--primary'>Volver al estilo predeterminado</button>
                <button  style={{backgroundColor: '#ccc', color: 'black', fontSize: 16}} onClick={(e) => resetSocialColors(e)} className='btn btn--primary'>Restaurar colores de redes sociales</button>
                
                <button onClick={(e) => {
                    e.preventDefault();
                    setSaving(true);
                }} className='btn btn--primary' style={{backgroundColor: 'var(--color-logo)', textTransform: 'uppercase', fontSize: 20, color: 'black'}}>Guarda tu diseño</button>
            </div>
        </form>
    );
}

export default DesignForm;
