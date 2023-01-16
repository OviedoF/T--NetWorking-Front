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
import EditOrders from '../../../components/admin-panel/edit-order/EditOrders'
import { faDochub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import routes from "../../../router/routes";

const ManageOrders = () => {
    const [purchase, setPurchase] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [currentPurchase, setCurrentPurchase] = useState(null);
    const auth = useSelector(state => state.auth);
    console.log(purchase);

    useEffect(() => {
        axios.get(`${env.API_URL}/payments/orders`, {
            headers: { userid: auth._id }
        })
            .then(res => setPurchase(res.data))
            .catch(err => alert('Error al cargar las ordenes.'));
    }, []);

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{
                width: '100%', minHeight: '100%', display: 'flex', marginTop: '30px',
                flexDirection: 'column', alignItems: 'center'
            }}>
                <h1 style={{ marginBottom: '30px', fontSize: '20px' }}>Gestionar ordenes</h1>

                {purchase.map(purchase => (
                    <motion.div layoutId={purchase._id} key={purchase._id} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='card'>
                            <button className="btn" type="button" onClick={() => setSelectedId(purchase._id)}>{purchase.state}</button>

                            <h3 style={{marginRight: 30}}> El comprador es: {purchase.buyer.firstName} {purchase.buyer.lastName} </h3>
                            <h3 style={{marginRight: 30}}> Fecha de la orden: {purchase.createdAt} </h3>

                            <Link to={`${routes.manageOrders}/${purchase._id}`} style={{textDecoration: 'none', position: 'absolute', right: 100}}>
                                <FontAwesomeIcon icon={faDochub} className='view_more' color="black"/>
                            </Link>

                            <div className="card__buttons">
                                <FontAwesomeIcon icon={faTrash} className='delete' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {
                    selectedId && <motion.div style={{width: '100vw', height: '100vh', position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000080', zIndex: '999999999999999999999999999999999999999999999999999'}}>
                        <EditOrders itemId={selectedId} purchases={purchase}
                        setSelectedId={setSelectedId} userid={auth._id} setPurchase={setPurchase}/>
                    </motion.div>
                }
            </AnimatePresence>
        </main>
    )
}

export default ManageOrders;