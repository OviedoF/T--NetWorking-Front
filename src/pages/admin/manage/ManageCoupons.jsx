import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../../../env';
import DashboardNav from '../../../components/dashboard/DashboardNav';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import CouponCard from '../../../components/admin-panel/manage-coupons/CouponCard';
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
        name: 'code',
        type: 'text',
        label: 'Código de descuento'
    },
    {
        name: 'discountPercent',
        type: 'number',
        label: 'Porcentaje de descuento'
    }
]

const ManageCoupons = () => {
    const [coupons, setCoupons] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [couponSelected, setCouponSelected] = useState(null);
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/coupon`)
            .then(res => setCoupons(res.data))
            .catch(err => alert('Error al cargar los cupones.'));
    }, []);

    useEffect(() => {
        if(selectedId && coupons) {
            coupons.map(coupon => {
                if(coupon._id === selectedId) {
                    setCouponSelected(coupon);
                }
            })
        }
    }, [selectedId, coupons]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const send = sendForm.put(inputs, form, `/coupon/${couponSelected._id}`, {
            headers: {
                userid: auth._id,
            }
        }, setSuccess, setErrores)

        if(send.success) axios.get(`${env.API_URL}/coupon`)
            .then(res => setCoupons(res.data))
            .catch(err => alert('Error al cargar los cupones.'));
    }

    const reset = () => {
        setSelectedId(null);
        setSuccess(false);
        setErrores(false);
        setForm({});
    }

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Manejar categorías</h1>

                {coupons.map(coupon => (
                    <motion.div layoutId={coupon._id} key={coupon._id} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <CouponCard key={coupon._id} coupon={coupon} setSelectedId={setSelectedId}/>
                    </motion.div>
                ))}
            </div>


            <AnimatePresence>
                {selectedId && 
                    <motion.div layoutId={selectedId} style={{position: 'fixed', background: '#00000080', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                        <EditItemForm inputs={inputs} item={couponSelected} form={form} setForm={setForm}
                        handleSubmit={handleSubmit} width='25%' success={success} errores={errores} 
                        reset={reset}/>

                        <FontAwesomeIcon icon={faXmark} style={{position: 'absolute', top: '30px', right: '50px', color: 'white', cursor: 'pointer', height: '30px'}} 
                        onClick={() => reset()}/>
                    </motion.div>
                }
            </AnimatePresence>
        </main>
    );
}

export default ManageCoupons;
