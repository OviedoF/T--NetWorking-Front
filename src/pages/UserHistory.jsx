import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../env';
import DashboardNav from '../components/dashboard/DashboardNav';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDochub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import routes from '../router/routes';


const UserHistory = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const [history, setHistory] = useState([]);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if(auth) {
            axios.get(`${env.API_URL}/orders/${auth._id}`)
            .then(res => {
                setHistory(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [auth]);

    return (
        <main style={{ minHeight: '100vh', display: 'flex' }}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{
                width: '100%', minHeight: '100%', display: 'flex', marginTop: '30px',
                flexDirection: 'column', alignItems: 'center'
            }}>
                <h1 style={{ marginBottom: '30px', fontSize: '20px' }}>Gestionar ordenes</h1>

                {history.map(purchase => (
                        <motion.div key={purchase._id} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                            <div className='card'>
                                <h3 style={{marginRight: 30}}> {purchase.buyer.firstName} {purchase.buyer.lastName} </h3>
                                <h3 style={{marginRight: 30}}> Fecha de la orden: {purchase.createdAt} </h3>

                                <Link to={`${routes.manageOrders}/${purchase._id}`} style={{textDecoration: 'none', position: 'absolute', right: 100}}>
                                    <FontAwesomeIcon icon={faDochub} className='view_more' color="black"/>
                                </Link>
                            </div>
                        </motion.div>
                ))}
            </div>
        </main>
    );
}

export default UserHistory;
