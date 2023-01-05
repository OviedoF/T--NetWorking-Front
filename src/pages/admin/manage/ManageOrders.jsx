import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import env from "../../../env";
import DashboardNav from "../../../components/dashboard/DashboardNav";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import '../../../components/admin-panel/CardStyle.scss'

const ManageOrders = () => {
    const [purchase, setPurchase] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const auth = useSelector(state => state.auth);

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

                {purchase.map(user => (
                    <motion.div layoutId={user._id} key={user._id} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='card'>
                            <h3>{user.state}</h3>
                            <h3 style={{marginRight: 30}}> El comprador es: {user.buyer} </h3>
                            <h3 style={{marginRight: 30}}> Id de la orden: {user._id} </h3>

                            <div className="card__buttons">
                                <FontAwesomeIcon icon={faPencil} className='edit' />
                                <FontAwesomeIcon icon={faTrash} className='delete' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </main>
    )
}

export default ManageOrders;