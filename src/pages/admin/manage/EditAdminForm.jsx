import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import { motion } from 'framer-motion';
import EditItemForm from '../../../components/admin-panel/EditItemForm';
import sendForm from '../../../helpers/sendForm';
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

const EditAdminForm = () => {
    const [adminData, setAdminData] = useState(null);
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/users/admin`, {
            headers: {
                userid: auth._id,
            }
        })
            .then(res => {
                console.log(res.data);
                setAdminData(res.data)
            })
            .catch(err => alert('Error al cargar los datos.'));

        window.addEventListener('resize', () => setWindowsSize(window.innerWidth));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const send = sendForm.put(inputs, form, `/coupon/${couponSelected._id}`, {
            headers: {
                userid: auth._id,
            }
        }, setSuccess, setErrores)

        if (send.success) axios.get(`${env.API_URL}/coupon`)
            .then(res => setCoupons(res.data))
            .catch(err => alert('Error al cargar los cupones.'));
    }

    const reset = () => {
        setSelectedId(null);
        setSuccess(false);
        setErrores(false);
        setForm({});
    }

    if(adminData) return (
        <main style={{ minHeight: '100vh', display: 'flex' }}>
            <DashboardNav auth={auth}/>

            <motion.div style={{ width: windowsSize > 530 ? '80%' : '100%', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                <EditItemForm inputs={inputs} item={adminData} form={form} setForm={setForm}
                handleSubmit={handleSubmit} width={windowsSize > 530 ? '25%' : '80%'} success={success} errores={errores}
                reset={reset} />
            </motion.div>
        </main>
    );
}

export default EditAdminForm;
