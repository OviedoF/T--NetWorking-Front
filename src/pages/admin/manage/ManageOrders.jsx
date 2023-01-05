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
    const [selectedIdState, setSelectedIdState] = useState(null)
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

    const handleSubmit = async () => {
        console.log(stateOrder)
        if (stateOrder === "Pedido enviado") {
            await axios.put(`${env.API_URL}/orders/${selectedIdState._id}/orderManagement`, {state: stateOrder, id: selectedIdState._id})
        }
        const orders = await axios.put(`${env.API_URL}/orders/${selectedId._id}/orderManagement`, {state: stateOrder, id: selectedId._id})
    }

    const reset = () => {
        setSelectedId(null);
        setSelectedIdState(null);
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
                            <button className="btn" type="button" onClick={() => {if (user.state === "Pendiente por comenzar")
                                                                                        {setState("Trabajando"), setSelectedId(user)};
                                                                                    if (user.state === "Trabajando")
                                                                                        {setState("Listo para enviar"), setSelectedId(user)};
                                                                                    if (user.state === "Listo para enviar")
                                                                                        {setState("Pedido enviado"), setSelectedIdState(user)}
                                                                                    if (user.state === "Pedido enviado")
                                                                                        {setState("Pedido finalizado"), setSelectedId(user)}
                                                                                    }}>{user.state}</button>
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
                { selectedIdState &&
                    <motion.div layoutId={selectedId} style={{position: 'fixed', background: '#00000080', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                        <div style={{background: '#646464', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius: '15px'}}>
                            <img style={{width: '90px', marginTop: '10px', marginBottom: '10px', height: '90px'}} src={logo} alt="Logo Networking" />
                            <h1 style={{textAlign: 'center'}}>¿Estas seguro de que quieres pasar<br/> este pedido de "{selectedIdState.state}" a "{stateOrder}"?</h1>
                            <h3 style={{textAlign: 'center', marginTop: '15px', marginBottom: '15px', fontSize: '12px'}}>Si lo quieres hacer tendras que enviar el codigo de seguimiento y la empresa<br/> por la que se hace el envio en el proximo formulario.</h3>
                            <form action="" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                                <label style={{marginBottom: '10px', textAlign: 'center'}}>Codigo de seguimiento</label>
                                <input style={{marginBottom: '10px'}}/>
                                <label style={{marginBottom: '10px', textAlign: 'center'}}>Empresa de envio</label>
                                <input style={{marginBottom: '10px'}}/>
                            </form>
                            <h3 style={{textAlign: 'center', marginTop: '15px', fontSize: '12px'}}>Si el pedido se retira en persona o no hay un codigo<br/> de seguimiento para el envio, solamente da a Confirmar<br/> sin brindar ningun dato.</h3>

                            <div style={{padding: '5px', marginBottom:'10px'}}>
                                <button style={{color: 'white', cursor: 'pointer', marginTop: '10px', padding: '10px'}} type="button" onClick={() => handleSubmit()}>Confirmar</button>
                                <button style={{color: 'white', cursor: 'pointer', marginLeft: '30px', padding: '10px'}} className="btn" type="submit" onClick={() => reset()}>Cancelar</button>
                            </div>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>

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