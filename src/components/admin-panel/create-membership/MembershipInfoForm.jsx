import React from 'react';
import { CreateMembershipContext } from './CreateMembershipData.provider';
import { useContext } from 'react';

const MembershipInfoForm = () => {
    const { membershipData, handleChange, handleCheckboxChange, handleImageChange } = useContext(CreateMembershipContext);

    return (
        <>
            <div className="form_section">
                <h2>Datos de la membresía</h2>

                <div className="form_group">
                    <label htmlFor="name">Nombre</label>
                    <input onChange={(e) => handleChange(e)} type="text" name="name" id="name" />
                </div>

                <div className="form_group">
                    <label htmlFor="description">Descripción</label>
                    <textarea onChange={(e) => handleChange(e)} name="description" id="description" cols="30" rows="10"></textarea>
                    <p className='disclaimer'>Esta descripción se mostrará junto con la membresía en la página de compra y en el modal.</p>
                </div>

                <div className="form_group">
                    <label htmlFor="price">Precio</label>
                    <input onChange={(e) => handleChange(e)} type="number" name="price" id="price" />
                </div>

                <div className="form_group">
                    <label htmlFor="priceWithOffer">Precio con oferta (porcentaje)</label>
                    <input onChange={(e) => handleChange(e)} type="number" name="priceWithOffer" id="priceWithOffer" />
                    <p className="disclaimer">Atributo opcional, si tiene alguna oferta escribir el porcentaje de la misma.</p>
                </div>

                <div className="form_group">
                    <label htmlFor="days">Duración (días)</label>
                    <input onChange={(e) => handleChange(e)} type="number" name="days" id="days" />
                </div>

                <div className="form_group">
                    <label htmlFor="image">Imagen</label>
                    <input onChange={(e) => handleImageChange(e)} type="file" name="image" id="image" />
                </div>
            </div>
        </>
    );
}

export default MembershipInfoForm;
