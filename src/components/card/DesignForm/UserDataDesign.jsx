import React, {useContext} from 'react';
import { CardDataContext } from '../CardData.provider.jsx';
import '../DesignForm.scss';

const UserDataDesign = () => {
    const {cardData, handleStyles} = useContext(CardDataContext);

    return (
        <>
            <div className="form_section">
                <h2>Nombre</h2>

                <div className="form_group">
                    <label htmlFor="name">Tamaño de la letra</label>
                    <input onChange={(e) => handleStyles(e)} className='name' type="range" name="fontSize" id="name_fz_pixels" min="14" max="30" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de la letra</label>
                    <input onChange={(e) => handleStyles(e)} className='name' type="color" name="color" id="name_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre letras</label>
                    <input onChange={(e) => handleStyles(e)} className='name' type="range" name="letterSpacing" id="name_ls_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre palabras</label>
                    <input onChange={(e) => handleStyles(e)} className='name' type="range" name="wordSpacing" id="name_ws_pixels" min="0" max="15" />
                </div>

                <div className="form_group">
                    <label htmlFor="textAlign" id='name_align_text'>Alineación</label>
                    
                    <select onChange={(e) => handleStyles(e)} className='name' name="textAlign" id='name_align_text'>
                        <option value="center">Centro</option>
                        <option value="left">Izquierda</option>
                        <option value="right">Derecha</option>
                    </select>
                </div>
            </div>

            <div className="form_section">
                <h2>Puesto y empresa</h2>

                <div className="form_group">
                    <label htmlFor="name">Tamaño de la letra</label>
                    <input onChange={(e) => handleStyles(e)} className="job" type="range" name="fontSize" id="job_fs_pixels" min="14" max="20" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de la letra</label>
                    <input onChange={(e) => handleStyles(e)} className="job" type="color" name="color" id="job_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre letras</label>
                    <input onChange={(e) => handleStyles(e)} className="job" type="range" name="letterSpacing" id="job_ls_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre palabras</label>
                    <input onChange={(e) => handleStyles(e)} className="job" type="range" name="wordSpacing" id="job_ws_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label  htmlFor="name">Alineación</label>
                    
                    <select onChange={(e) => handleStyles(e)} className="job" name="textAlign" id="job_align_text">
                        <option value="center">Centro</option>
                        <option value="left">Izquierda</option>
                        <option value="right">Derecha</option>
                    </select>
                </div>
            </div>

            <div className="form_section">
                <h2>Email</h2>

                <div className="form_group">
                    <label htmlFor="name">Tamaño de la letra</label>
                    <input className='email' onChange={(e) => handleStyles(e)} type="range" name="fontSize" id="job_fs_pixels" min="14" max="20" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de la letra</label>
                    <input className='email' onChange={(e) => handleStyles(e)} type="color" name="color" id="job_color_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre letras</label>
                    <input className='email' onChange={(e) => handleStyles(e)} type="range" name="letterSpacing" id="job_ls_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Alineación</label>
                    
                    <select className='email' onChange={(e) => handleStyles(e)} name="textAlign" id="job_align_text">
                        <option value="center">Centro</option>
                        <option value="left">Izquierda</option>
                        <option value="right">Derecha</option>
                    </select>
                </div>
            </div>

            <div className="form_section">
                <h2>Descripción</h2>

                <div className="form_group">
                    <label htmlFor="name">Tamaño de la letra</label>
                    <input onChange={(e) => handleStyles(e)} className='biography' type="range" name="fontSize" id="desc_fs_pixels" min="14" max="20" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Color de la letra</label>
                    <input onChange={(e) => handleStyles(e)} className='biography' type="color" name="color" id="desc_color" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre letras</label>
                    <input onChange={(e) => handleStyles(e)} className='biography' type="range" name="letterSpacing" id="desc_ls_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Tamaño de las líneas</label>
                    <input onChange={(e) => handleStyles(e)} className='biography' type="range" name="lineHeight" id="desc_lh_pixels" min="16" max="40" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Separación entre palabras</label>
                    <input onChange={(e) => handleStyles(e)} className='biography' type="range" name="wordSpacing" id="desc_ws_pixels" min="0" max="5" />
                </div>

                <div className="form_group">
                    <label htmlFor="name">Alineación</label>
                    
                    <select onChange={(e) => handleStyles(e)} className='biography' name="textAlign" id="desc_align_text">
                        <option value="center">Centro</option>
                        <option value="left">Izquierda</option>
                        <option value="right">Derecha</option>
                        <option value="justify">Justificado</option>
                    </select>
                </div>
            </div>
        </>
    );
}

export default UserDataDesign;
