import logo from '../../../assets/logo.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import './EditOrders.scss';

const EditOrders = ({ setSelectedId, userid, purchases, setPurchase, itemId}) => {
    const [form, setForm] = useState({});
    const [nextStatus, setNextStatus] = useState('');
    const [item, setItem] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        purchases.map(purchase => {
            if(purchase._id === itemId) {
                setItem(purchase);
            }
        })
    }, []);

    useEffect(() => {
        if(item.state === 'Pendiente') setNextStatus('Trabajando');
        if(item.state === 'Trabajando') setNextStatus('Enviado');
        if(item.state === 'Enviado') setNextStatus('Listo para retirar');
        if(item.state === 'Listo para retirar') setNextStatus('Finalizado');
    }, [item]);

    const getPurchase = () => {
        axios.get(`${env.API_URL}/payments/orders`, {
            headers: { userid }
        })
            .then(res => {
                setPurchase(res.data)
                setSelectedId(null);
            })
            .catch(err => alert('Error al cargar las ordenes.'));
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`${env.API_URL}/orders/${item._id}/orderManagement`, {
            state: nextStatus,
            ...form,
            id: item._id
        }) 
        .then(res => {
            console.log(res.data)
            getPurchase();
            if(res.data.newStatus === 'Enviado') {
                axios.post(`${env.API_URL}/emails/confirmingPurchase`, {
                    email: 'oviedofederico039@gmail.com',
                    trackingCode: form.trackingNumber,
                })
            }
        })
        .catch(err => console.log(err))
    }

    if(item) return (
        <div style={{background: '#646464', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '15px', padding: '20px 50px'}}>
            <img style={{width: '90px', marginTop: '10px', marginBottom: '10px', height: '90px'}} src={logo} alt="Logo Networking" />
            <h1 style={{textAlign: 'center', color: 'white'}}>¿Está seguro que quiere terminar el proceso "{item.state}" de este pedido?</h1>
            
            {
                item.state === 'Pendiente' && <h1 style={{textAlign: 'center', color: 'white', marginTop: 20}}>El pedido se marcará como "Trabajando"</h1>
            }

            {
                item.state === 'Trabajando' && <h1 style={{textAlign: 'center', color: 'white', marginTop: 20}}>El pedido se marcará como "Enviado"</h1>
            }

            {
                item.state === 'Enviado' && <h1 style={{textAlign: 'center', color: 'white', marginTop: 20}}>El pedido se marcará como "Listo para retirar"</h1>
            }

            {
                item.state === 'Listo para retirar' && <h1 style={{textAlign: 'center', color: 'white', marginTop: 20}}>El pedido se marcará como "Finalizado"</h1>
            }

            {
                item.state === 'Trabajando' && 
                <form action="" className='shipping_form'>
                    <label htmlFor="trackingNumber">Número de seguimiento</label>
                    <input onChange={(e) => handleChange(e)} type="text" placeholder="Tracking number" name='trackingNumber' />
                    
                    <label htmlFor="sendDate">Fecha de envío</label>
                    <input onChange={(e) => handleChange(e)} type="date" placeholder="Tracking number" name='sendDate' />

                    <label htmlFor="estimatedDate">Fecha de entrega estimada</label>
                    <input onChange={(e) => handleChange(e)} type="date" placeholder="Tracking number" name='estimatedDate'/>

                    <label htmlFor="shippingEntity">Empresa de envío</label>
                    <input onChange={(e) => handleChange(e)} type="text" name="shippingEntity" id="emprise" />
                </form>
            }

            <div style={{padding: '5px', marginBottom:'10px'}}>
                <button style={{color: 'white', cursor: 'pointer', marginTop: '10px', padding: '10px'}} type="button" onClick={(e) => handleSubmit(e)}>Confirmar</button>
                <button style={{color: 'white', cursor: 'pointer', marginLeft: '30px', padding: '10px'}} className="btn" type="submit" onClick={() => setSelectedId(null)}>Cancelar</button>
            </div>
        </div>
    )
}

export default EditOrders