import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import env from '../../env';
import MercadoPagoPaymentCompra from './MercadoPagoPaymentCompra';
import './PaymentOptions.scss'

const PaymentOptions = ({products}) => {
    const [total, setTotal] = useState(0);
    const [totalWithCoupon, setTotalWithCoupon] = useState(0);
    const [aplyingCoupon, setAplyingCoupon] = useState(false);
    const [paymentID, setPaymentID] = useState(null);
    const couponCode = useRef();
    const auth = useSelector(state => state.auth);

    const handleLocalhost = () => {
        axios.post(`${env.API_URL}/payments/success/${auth._id}`, {})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    useEffect(() => {
        let total = 0;
        products.forEach(product => {
            total += product.price * product.quantity;
        });
        setTotal(total.toFixed(3));
    }, [products]);

    const handleAplyingCoupon = () => {
        axios.post(`${env.API_URL}/coupon/apply`, {
            code: couponCode.current.value,
            price: total
        })
        .then(res => {
            setTotalWithCoupon(res.data.total.toFixed(3));
        })
        .catch(err => {
            console.log(err);
        });
    }

    if(products.length > 0 ) return (
        <div className='payments_container'>
            <h3 className='mount'>Monto total: 
                <span style={{marginLeft: 10}}>
                    {totalWithCoupon > 0 && `$${totalWithCoupon}`}
                </span>
                <span className={totalWithCoupon ? 'second' : 'first'}>
                    ${total}
                </span>
            </h3>

            <button className='apply' onClick={() => setAplyingCoupon(!aplyingCoupon)}>Aplicar cupón</button>

            {aplyingCoupon && (
                <div className='coupon_input'>
                    <input type="text" placeholder="Código de cupón" ref={couponCode}/>
                    <button onClick={() => handleAplyingCoupon()}>Aplicar</button>
                </div>
            )}

            
            <MercadoPagoPaymentCompra cart={products} setPaymentID={setPaymentID} 
            paymentID={paymentID}/>

            <button className='buy' onClick={() => handleLocalhost()}>Comprar en localhost</button>


            
        </div>
    );
}

export default PaymentOptions;
