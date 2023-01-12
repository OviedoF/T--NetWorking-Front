import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import routes from '../../../router/routes';
import './QRInput.scss'

const QRInput = ({form, setForm}) => {
    const auth = useSelector(state => state.auth)
    const [userQRS, setUserQRS] = useState([]);
    console.log(auth);

    

    return (
        <div className='form-section'>
            <h2>Asocia tu producto a una tarjeta virtual.</h2>
            <p className="disclaimer">Para ello copia la url de la tarjeta virtual que deseas asociar o carga el código QR tu mismo. Si no tiene su código QR puede descargarlo desde el <Link to={routes.dashboard}>dashboard de su usuario.</Link></p>

            <div className="form-group">
                <label htmlFor="link">URL hacia la tarjeta</label>
                <input type="text" name="link" id="link" onChange={(e) => {
                    setForm({
                        ...form,
                        linkToRedirect: e.target.value
                    })
                }} />
            </div>

            <p>ó</p>

            <div className="form-group">
                <label htmlFor="qrtext">Código QR</label>
                <label htmlFor="qr" className='file-picker'>Seleccione su código QR</label>
                <input type="file" name="qr" id="qr" onChange={(e) => {
                    setForm({
                        ...form,
                        qrToRedirect: e.target.files[0]
                    })
                }}/>
            </div>
            {form.qrToRedirect && <p className='file-name'>Archivo seleccionado: {form.qrToRedirect.name}</p>}

        </div>
    );
}

export default QRInput;
