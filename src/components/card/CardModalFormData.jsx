import React, { useState, useEffect, useContext } from 'react';
import CardDataContext from './CardData.provider';
import './CardModalFormData.scss'

const CardModalFormData = () => {
    const {cardData, handleInputs, handleImages, handleBoolean} = useContext(CardDataContext);
    console.log(cardData);
    console.log('<-------------- DATA CONTEXT')

    return (
        <form className="card_modal_form_content" id='card_modal_form_data'>
            <div className="form_section images" >
                <h3>Imagenes</h3>

                <div className="form_group">
                    <label htmlFor="coverPhoto">Imágen de portada</label>
                    <input type="file" name="coverPhoto" id="coverPhoto" onChange={(e) => handleImages(e)} />
                </div>

                <div className="form_group">
                    <label htmlFor="profilePhoto">Imágen de perfil</label>
                    <input type="file" name="profilePhoto" id="profilePhoto" onChange={(e) => handleImages(e)} />
                </div>

                <div className="form_group full">
                    <label htmlFor="logo">Logo de empresa</label>
                    <input type="file" name="logo" id="logo" onChange={(e) => handleImages(e)} />
                </div>
            </div>

            <div className="form_section">
                <h3>Información</h3>

                <div className="form_group">
                    <label htmlFor="jobPosition">Puesto</label>
                    <input type="text" name="jobPosition" id="jobPosition" value={cardData.jobPosition} onChange={(e) => handleInputs(e)} />
                </div>

                <div className="form_group">
                    <label htmlFor="jobEntity">Empresa</label>
                    <input type="text" name="jobEntity" id="jobEntity" value={cardData.jobEntity} onChange={(e) => handleInputs(e)} />
                </div>

                <div className="form_group full">
                    <label htmlFor="email">Correo de contacto</label>
                    <input type="email" name="email" id="email" value={cardData.email} onChange={(e) => handleInputs(e)} />
                </div>

                <div className="form_group full">
                    <label htmlFor="biography">Descríbete en 140 carácteres</label>
                    <textarea name="biography" id="biography" value={cardData.biography} onChange={(e) => handleInputs(e)} maxLength={140}/>
                </div>

                <div className="form_group full">
                    <label htmlFor="cardLink">¿Cómo quieres que encuentren tu tarjeta?</label>

                    <div className="cardlink_input" style={{display: 'flex', alignItems: 'flex-start'}}>
                        <p style={{fontSize: 20, marginTop: 10}}>https://biznescard.cl/</p>
                        <input type="text" name="cardLink" id="cardLink" value={cardData.cardLink} onChange={(e) => handleInputs(e)} />
                    </div>
                </div>
            </div>

            <div className="form_section">
                <div className="form_group full vcard">
                        <h3>Habilitar descarga de tarjeta virtual</h3>

                        <div className="" style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="vcard" style={{marginBottom: 0}}>Habilitar</label>
                            <input type="checkbox" name="vcard" id="vcard" value={cardData.vcard} onChange={(e) => handleBoolean(e)} />
                        </div>

                        <p className='disclaimer' style={{marginTop: 20}}>
                            El formato .vcf (también conocido como V Card o Virtual Card) es un formato estándar para el intercambio de información personal, específicamente tarjetas personales electrónicas.
                        </p>

                        <p className='disclaimer'>
                            La información que tenga en la tarjeta Biznes Card se guardará, a su vez, en un archivo .vcf que podrá descargar y compartir con otras personas.
                        </p>
                </div>
            </div>

            <div className="form_section">
                <div className="form_group full vcard">
                        <h3>Habilitar botón de añadir contacto</h3>
                        
                        {cardData.addContact && 
                            <div className="form_group full">
                                <label htmlFor="cellphone">Número de teléfono</label>

                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <p style={{fontSize: 18, marginRight: 15}}>+56</p>
                                    <input type="number" name="cellphone" id="cellphone" value={cardData.cellphone} onChange={(e) => handleInputs(e)} 
                                    defaultValue="+"/>
                                </div>
                            </div>
                            }

                        <div className="" style={{display: 'flex', alignItems: 'center'}}>
                            <label htmlFor="addContact" style={{marginBottom: 0}}>Habilitar</label>
                            <input type="checkbox" name="addContact" id="addContact" value={cardData.addContact} onChange={(e) => handleBoolean(e)} />
                        </div>

                        <p className='disclaimer' style={{marginTop: 20}}>
                            Al habilitar esta opción, los usuarios podrán añadir su tarjeta a la lista de contactos de su dispositivo móvil.
                        </p>
                </div>
            </div>
        </form>
    );
}

export default CardModalFormData;
