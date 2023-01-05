import React from 'react';
import { CreateMembershipContext } from './CreateMembershipData.provider';
import { useContext } from 'react';

const MembershipRestriccionsForm = () => {
    const { membershipData, handleCheckboxChange, handleChangeObject, handlePerfilType } = useContext(CreateMembershipContext);

    return (
        <>
            <div className="form_section">
                <h2>Restricciones</h2>

                <div className="form_group">
                    <label htmlFor="permissions_perfilPhoto">Acceso a foto de perfil</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_perfilPhoto" id="permissions_perfilPhoto" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_coverPhoto">Acceso a foto de portada</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_coverPhoto" id="permissions_coverPhoto" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_enterprisePhoto">Acceso a foto de su empresa</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_enterprisePhoto" id="permissions_enterprisePhoto" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_name">Acceso a nombre en su tarjeta</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_name" id="permissions_name" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_job">Acceso a cargo en su tarjeta</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_job" id="permissions_job" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_jobEntity">Acceso a poner empresa en la que trabaja</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_jobEntity" id="permissions_jobEntity" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_description[available]">Acceso a una descripción en su tarjeta</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_description[available]" id="permissions_description" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_description[limit]">Límite de carácteres en la descripción</label>
                    <input type="number" onChange={(e) => handleChangeObject(e)} name="permissions_description[limit]" id="permissions_description[limit]" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_email">Acceso a E-Mail en su tarjeta</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_email" id="permissions_email" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_saveContact">Acceso a botón para guardar contacto</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_saveContact" id="permissions_saveContact" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_vcard">Acceso a archivo VCard en su tarjeta</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_vcard" id="permissions_vcard" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_publicity">¿El usuario va a tener publicidad de Biznes bajo su tarjeta?</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_publicity" id="permissions_publicity" />
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_perfilType">Tipos de perfil permitidos para la membresía</label>
                    
                    <div className="perfilType_options">
                        <button onClick={(e) => {
                            e.preventDefault();
                            handlePerfilType(e);
                        }} value="publico" 
                        className={membershipData.perfilType.includes('publico') ? 'active' : ''}>
                            Público
                        </button>

                        <button onClick={(e) => {
                            e.preventDefault();
                            handlePerfilType(e);
                        }} value= 'privado'
                        className={membershipData.perfilType.includes('privado') ? 'active' : ''}>
                            Privado
                        </button>

                        <button onClick={(e) => {
                            e.preventDefault();
                            handlePerfilType(e);
                        }} value= 'vip'
                        className={membershipData.perfilType.includes('vip') ? 'active' : ''}>
                            VIP
                        </button>
                    </div>
                </div>

                <div className="form_group">
                    <label htmlFor="permissions_userLink">¿El usuario va a poder cambiar la URL de su tarjeta?</label>
                    <input type="checkbox" onChange={(e) => handleCheckboxChange(e)} name="permissions_userLink" id="permissions_userLink" />
                </div>
            </div>  
        </>
    );
}

export default MembershipRestriccionsForm;
