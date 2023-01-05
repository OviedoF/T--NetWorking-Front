import React, {useContext} from 'react';
import { CardDataContext } from '../CardData.provider.jsx';
import '../DesignForm.scss';

const PreviewHeaderDesign = () => {
    const {cardData, handleStyles} = useContext(CardDataContext);

    
    return (
        <>
            <div className="form_section">
                <h2 style={{marginTop: 0}}>Fondo</h2>

                <div className="form_group" style={{width: '15%', justifyContent: 'flex-start'}}>
                    <label htmlFor="backgroundColor">Color de fondo</label>
                    <input className='body' onChange={(e) => handleStyles(e) } type="color" name="backgroundColor" id="background_color" />
                </div>
            </div>

            <div className="form_section">
                <h2 >Foto de perfil</h2>

                <div className="form_group">
                    <label htmlFor="profile_picture">Radio del borde</label>
                    <input className='profilePhoto' onChange={(e) => handleStyles(e) } type="range" name="borderRadius" id="profile_picture_percent" min="0" max="50" 
                    />
                </div>

                <div className="form_group">
                    <label htmlFor="profile_picture">Color del borde</label>
                    <input className='profilePhoto' onChange={(e) => handleStyles(e) } type="color" name="borderColor" id="profile_picture_color" 
                    />
                </div>

                <div className="form_group">
                    <label htmlFor="profile_picture">Ancho del borde</label>
                    <input className='profilePhoto' onChange={(e) => handleStyles(e) } type="range" name="borderWidth" id="profile_picture_pixels" min="0" max="10" 
                    />
                </div>
            </div>

            <div className="form_section">
                <h2>Logo</h2>

                <div className="form_group">
                    <label htmlFor="logo">Radio del borde</label>
                    <input className='logo' onChange={(e) => handleStyles(e) } type="range" name="borderRadius" id="logo_percent" min="0" max="50" />
                </div>

                <div className="form_group">
                    <label htmlFor="logo">Color del borde</label>
                    <input className='logo' onChange={(e) => handleStyles(e) } type="color" name="borderColor" id="logo_color" 
                    style={{height: 30}}/>
                </div>

                <div className="form_group">
                    <label htmlFor="profile_picture">Ancho del borde</label>
                    <input className='logo' onChange={(e) => handleStyles(e) } type="range" name="borderWidth" id="profile_picture_pixels" min="0" max="10" />
                </div>
            </div>
        </>
    );
}

export default PreviewHeaderDesign;
