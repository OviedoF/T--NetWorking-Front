import React, {useContext} from 'react';
import { CardDataContext } from '../CardData.provider.jsx';
import '../DesignForm.scss';

const SocialButtonsDesign = () => {
    const {cardData, handleStyles, } = useContext(CardDataContext);

    return (
        <>
            <div className="form_section">
                <h2>Botones de redes sociales favoritas </h2>

                <div className="form_group">
                    <label htmlFor="name">Color del ícono</label>
                    <input className='buttonSocialFavorite' onChange={(e) => handleStyles(e)} 
                    type="color" name="color" id="social_favs_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de fondo</label>
                    <input className='buttonSocialFavorite' onChange={(e) => handleStyles(e)} 
                    type="color" name="backgroundColor" id="social_favs_color_bg" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Radio de borde</label>
                    <input className='buttonSocialFavorite' onChange={(e) => handleStyles(e)} 
                    type="range" name="borderRadius" id="social_favs_percent" min="0" max="50" />
                </div>
            </div>

            <div className="form_section">
                <h2>Demás redes sociales </h2>

                <div className="form_group">
                    <label htmlFor="name">Color del ícono</label>
                    <input className='buttonSocial' onChange={(e) => handleStyles(e)} 
                    type="color" id="social_icons_color" name="color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de fondo</label>
                    <input className='buttonSocial' onChange={(e) => handleStyles(e)} 
                    type="color" id="social_icons_color" name="backgroundColor" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Radio de borde</label>
                    <input className='buttonSocial' onChange={(e) => handleStyles(e)} 
                    type="range" id="social_icons_percent" name="borderRadius" min="0" max="50" />
                </div>
            </div>
        </>
    );
}

export default SocialButtonsDesign;
