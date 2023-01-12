import React, { useState } from 'react';
import './ModalData.scss';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ColorInput from './ModalDataInputs/ColorInput';
import QRInput from './ModalDataInputs/QRInput';
import FilePicker from './ModalDataInputs/FilePicker';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../redux/actions/auth.actions';
import {addToShoppingCart} from '../../redux/actions/shoppingCart.actions';
import env from '../../env';

const ModalData = ({product, setIsModalOpen, quantity}) => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const handleAddToCart = (productToCart) => {
        const formData = new FormData();

        formData.append('type', 'add');
        formData.append('product', productToCart._id);
        formData.append('quantity', productToCart.quantity);
        formData.append('color', productToCart.color);
        formData.append('linkToRedirect', productToCart.linkToRedirect);
        formData.append('images', productToCart.qrToRedirect || false);
        formData.append('images', productToCart.fileForEdit || false);


        axios.put(`${env.API_URL}/users/${auth._id}/updateShoppingCart`, formData)
        .then(res => {
            dispatch(authLogin({
                ...res.data,
                token: auth.token
            }));
            setSuccess(true);
        })
        .catch(err => console.log(err));

        dispatch(addToShoppingCart({...product, quantity}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.color && product.colors.length > 1) {
            setError('Debes seleccionar un color');
            return;
        };

        if((!form.qrToRedirect && product.requiredQR) && (!form.linkToRedirect && product.requiredQR)) {
            setError('Debes seleccionar un código QR o ingresar un link.');
            return;
        };

        setError(false);

        const productToCart = {
            ...product,
            quantity: quantity,
            color: form.color || false,
            qrToRedirect: form.qrToRedirect || false,
            linkToRedirect: form.linkToRedirect || false,
            fileForEdit: form.fileForEdit || false,
        };

        handleAddToCart(productToCart)
    };

    return (
        <motion.div className='buy_data_modal'>
            <FontAwesomeIcon icon={faXmark} onClick={() => setIsModalOpen(false)} 
            id="buy_data_modal_close"/>

            <motion.form animate={{transform: 'scaleX(1)'}}>
                <h2>Formulario de compra</h2>

                {product.colors.length > 1 && <ColorInput product={product} form={form} setForm={setForm} colors={product.colors}/> }

                {product.requiredQR && <QRInput form={form} setForm={setForm} />}

                {product.requireImageEditable && <FilePicker form={form} setForm={setForm} />}

                {error && <p className="error">{error}</p>}
                <div className="add_to_cart">
                    <button type="submit" onClick={(e) => handleSubmit(e)}>Agregar al carrito</button>
                </div>
                {success && <p className="success">Producto agregado al carrito</p>}
            </motion.form>
        </motion.div>
    );
}

export default ModalData;
