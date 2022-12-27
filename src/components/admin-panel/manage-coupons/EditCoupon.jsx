import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';
import axios from 'axios';

const EditCoupon = ({coupon, selectedId, setSelectedId, actualizeCategories}) => {
    const [name, setName] = useState(null);
    const [code, setCode] = useState(null);
    const [discountPercent, setDiscountPercent] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        if(name) formData.append('name', name);
        if(code) formData.append('code', code);
        if(discountPercent) formData.append('discountPercent', discountPercent);

        if(!name && !code && !discountPercent) return setError('No se han realizado cambios');

        axios.put(`${env.API_URL}/coupon/${coupon._id}`, formData, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
        .then(res => {
            setSuccess(true)
            setError(false);
        })
        .catch(err => {
            setError('Error al actualizar la categoría');
            setSuccess(false);
        });
    }

    return (
        <form action="" id='create-category-form'>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input defaultValue={coupon.name} type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="name">Código</label>
                <input defaultValue={coupon.code} type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="name">Porcentaje de descuento</label>
                <input defaultValue={coupon.discountPercent} type="number" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>


            <div className="buttons" style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
                <button style={{width: '48%'}} type="button" className="btn btn-danger" onClick={() => setSelectedId(null)}>CANCELAR</button>
                <button style={{width: '48%'}} type="submit" className="btn btn-primary" onClick={handleSubmit}>EDITAR</button>
            </div>

            {success && <p className="text-success">Cupón editado correctamente.</p>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default EditCoupon;
