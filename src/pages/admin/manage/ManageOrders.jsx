import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import env from "../../../env";
import DashboardNav from "../../../components/dashboard/DashboardNav";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlusSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import '../../../components/admin-panel/CardStyle.scss'
import { AnimatePresence } from "framer-motion";
import logo from '../../../assets/logo.png';
import EditOrders from './EditOrders'

const ManageOrders = () => {
    const [purchase, setPurchase] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [stateOrder, setState] = useState(null)
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/payments/orders`, {
            headers: { userid: auth._id }
        })
            .then(res => setPurchase(res.data))
            .catch(err => alert('Error al cargar las ordenes.'));
    }, [selectedId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(selectedId._id)
        console.log(stateOrder)
        const send = axios.put(`${env.API_URL}/orders/${selectedId._id}/orderManagement`, {
            stateOrder,
            headers: {
                userid: auth._id,
                token: auth.token
            }
        }, setSuccess, setErrores)

        if(send.success) axios.get(`${env.API_URL}/payments/orders`)
            .then(res => setCoupons(res.data))
            .catch(err => alert('Error al cargar los cupones.'));
    }

    const reset = () => {
        setSelectedId(null);
        setSuccess(false);
        setErrores(false);
    }

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{
                width: '100%', minHeight: '100%', display: 'flex', marginTop: '30px',
                flexDirection: 'column', alignItems: 'center'
            }}>
                <h1 style={{ marginBottom: '30px', fontSize: '20px' }}>Gestionar ordenes</h1>

                {purchase.map(user => (
                    <motion.div layoutId={user._id} key={user._id} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='card'>
                            <button className="btn" type="button" onClick={() => {if(user.state === "En proceso") {setState("Enviado")}; setSelectedId(user)}}>{user.state}</button>
                            <h3 style={{marginRight: 30}}> El comprador es: {user.email} </h3>
                            <h3 style={{marginRight: 30}}> Id de la orden: {user._id} </h3>

                            <div className="card__buttons">
                                <FontAwesomeIcon icon={faPencil} className='edit' />
                                <FontAwesomeIcon icon={faTrash} className='delete' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId &&
                    <motion.div layoutId={selectedId} style={{position: 'fixed', background: '#00000080', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                        <EditOrders stateOrder={stateOrder} item={selectedId} reset={reset} handleSubmit={handleSubmit} errores={errores} success={success} />
                    </motion.div>
                }
            </AnimatePresence>

        </main>
    )
}

export default ManageOrders;