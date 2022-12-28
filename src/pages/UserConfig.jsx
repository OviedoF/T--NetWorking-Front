import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../env';
import DashboardNav from '../components/dashboard/DashboardNav';
import { motion } from 'framer-motion';
import EditItemForm from '../components/admin-panel/EditItemForm';
import { useSelector } from 'react-redux';

const inputs = [
    {
        name: 'name',
        type: 'text',
        label: 'Nombre'
    },
    {
        name: 'email',
        type: 'email',
        label: 'Dirección de correo'
    },
    {
        name: 'username',
        type: 'text',
        label: 'Nombre de usuario'
    }
]

const UserConfig = () => {
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        window.addEventListener('resize', () => setWindowsSize(window.innerWidth));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        
    }

    const reset = () => {
        setSelectedId(null);
        setSuccess(false);
        setErrores(false);
        setForm({});
    }

    if(auth) return (
        <main style={{ minHeight: '100vh', display: 'flex' }}>
            <DashboardNav auth={auth}/>

            <motion.div style={{ width: windowsSize > 530 ? '80%' : '100%', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                <EditItemForm inputs={inputs} item={auth} form={form} setForm={setForm}
                handleSubmit={handleSubmit} width={windowsSize > 530 ? '25%' : '80%'} success={success} errores={errores}
                reset={reset} />
            </motion.div>
        </main>
    );
}

export default UserConfig;
