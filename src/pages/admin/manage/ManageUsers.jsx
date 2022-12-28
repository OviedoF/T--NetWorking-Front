import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import '../../../components/admin-panel/CardStyle.scss'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/users`, {
            headers: { userid: auth._id }
        })
            .then(res => setUsers(res.data))
            .catch(err => alert('Error al cargar los cupones.'));
    }, []);

    return (
        <main style={{ minHeight: '100vh', display: 'flex' }}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{
                width: '100%', minHeight: '100%', display: 'flex',
                flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
            }}>
                <h1 style={{ marginBottom: '30px', fontSize: '20px' }}>Eliminar usuarios</h1>

                {users.map(user => (
                    <motion.div layoutId={user._id} key={user._id} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <div className='card'>
                            <h3>{user.name}</h3>
                            <h3 style={{marginRight: 30}}>{user.email}</h3>
                            {
                                user.roles && user.roles.map(role => (
                                    <span>{role.name}/</span>
                                ))
                            }

                            <div className="card__buttons">
                                <FontAwesomeIcon icon={faTrash} className='delete' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </main>
    );
}

export default ManageUsers;