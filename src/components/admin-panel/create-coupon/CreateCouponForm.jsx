import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';
import env from '../../../env';
import '../CreateForm.scss';

const CreateCouponForm = () => {
    const [name, setName] = useState(null);
    const [code, setCode] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const auth = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('code', code);
        formData.append('discountPercent', discount);

        if(!name || !code || !discount) return setError('Todos los campos son obligatorios.');
        if(discount > 100) return setError('El descuento no puede ser mayor al 100%.');
        if(discount < 1) return setError('El descuento no puede ser menor al 1%.');

        axios.post(`${env.API_URL}/coupon`, formData, {
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
            setError(err.response.data.message)
            setSuccess(false);
        });
    }

    return (
        <form action="" id='create-category-form'>
            <img src={logo} alt="Logo Networking" />

            <div className="form-group">
                <label htmlFor="code">Código 
                    <span style={{fontSize: 14, marginLeft: 10, color: '#ffffff80'}} >(sensible a mayúsculas y minúsculas)</span>
                </label>

                <input type="text" name="code" id="code" className="form-control" onChange={(e) => setCode(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="name">Nombre 
                    <span style={{fontSize: 14, marginLeft: 10, color: '#ffffff80'}} >(esto le ayudará a usted a reconocerlo)</span>
                </label>

                <input type="text" name="name" id="name" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="discount">Porcentaje de descuento 
                    <span style={{fontSize: 14, marginLeft: 10, color: '#ffffff80'}} >(en número)</span>
                </label>

                <input type="number" name="discount" id="discount" className="form-control" max={100} min={1} 
                onChange={(e) => setDiscount(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>CREAR</button>

            {success && <p className="text-success">Cupón creado correctamente.</p>}

            {error && <p className="text-danger">{error}</p>}
        </form>
    );
}

export default CreateCouponForm;
