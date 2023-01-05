import React, {useContext} from 'react';
import { CardDataContext } from '../CardData.provider.jsx';
import '../DesignForm.scss';

const ButtonsContactDesign = () => {
    const {cardData, handleStyles} = useContext(CardDataContext);

    return (
        <>
            <div className="form_section">
                <h2>Botón VCard</h2>
                
                <div className="form_group">
                    <label htmlFor="name">Tamaño de la letra</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="range" name="fontSize" id="vc_fs_pixels" min="14" max="20" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de la letra</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="color" name="color" id="vc_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre letras</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="range" name="letterSpacing" id="vc_ls_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de fondo</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="color" name="backgroundColor" id="vc_bg_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Radio de borde</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="range" name="borderRadius" id="vc_br_pixels" min="0" max="30" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Ancho</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="range" name="width" id="vc_width_percent" min="50" max="100" />
                </div>

                <div className="form_group">
                    <label htmlFor="ancho">Alto</label>
                    <input className="buttonVCard" onChange={(e) => handleStyles(e)} type="range" name="height" id="vc_height_pixels" min="20" max="100" />
                </div>
            </div>

            <div className="form_section">
                <h2>Botón de contacto</h2>
                
                <div className="form_group">
                    <label htmlFor="name">Tamaño de la letra</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="range" name="fontSize" id="bc_pixels_fs" min="14" max="20" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de la letra</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="color" name="color" id="bc_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre letras</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="range" name="letterSpacing" id="bc_pixels_ls" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de fondo</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="color" name="backgroundColor" id="bc_color_bg" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Radio de borde</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="range" name="borderRadius" id="bc_pixels_br" min="0" max="30" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Ancho</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="range" name="width" id="bc_w_percent" min="50" max="100" />
                </div>

                <div className="form_group">
                    <label htmlFor="ancho">Alto</label>
                    <input className="buttonContact" onChange={(e) => handleStyles(e)} type="range" name="height" id="bc_height_pixels" min="20" max="100" />
                </div>
            </div>
        </>
    );
}

export default ButtonsContactDesign;
