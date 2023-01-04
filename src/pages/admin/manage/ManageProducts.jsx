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
import { AnimatePresence } from 'framer-motion';
import EditItemForm from '../../../components/admin-panel/EditItemForm';
import sendForm from '../../../helpers/sendForm';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const inputs = [
    {
        name: 'name',
        type: 'text',
        label: 'Nombre producto'
    },
    {
        name: 'description',
        type: 'text',
        label: 'Descripcion de producto'
    },
    {
        name: 'stock',
        type: 'number',
        label: 'Stock del producto'
    },
    {
        name: 'price',
        type: 'number',
        label: 'Precio del producto'
    }
]

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [productSelected, setProductSelected] = useState(null);
    const [form, setForm] = useState({});
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/product`, {
            headers: { userid: auth._id }
        })
            .then(res => setProducts(res.data))
            .catch(err => alert('Error al cargar los productos.'));
    }, [selectedId]);

    useEffect(() => {
        if(selectedId && products) {
            products.map(product => {
                if(product._id === selectedId) {
                    setProductSelected(product);
                }
            })
        }
    }, [selectedId, products]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const send = sendForm.put(inputs, form, `/product/${productSelected._id}/updateProduct`, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        }, setSuccess, setErrores)
        
        if(send.success) axios.get(`${env.API_URL}/product`)
            .then(res => setProducts(res.data))
            .catch(err => alert('Error al cargar los productos.'));
    }

    const reset = () => {
        setSelectedId(null);
        setSuccess(false);
        setErrores(false);
        setForm({});
    }

    const actualizeProducts = () => {
        axios.get(`${env.API_URL}/product`)
            .then(res => setProducts(res.data))
            .catch(err => alert('Error al cargar los productos.'));
    }

    const handleDelete = (e) => {
        axios.delete(`${env.API_URL}/product/${e}`, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
            .then(res => actualizeProducts())
            .catch(err => console.log(err));
    }

    return (
        <main style={{ minHeight: '100vh', display: 'flex' }}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{
                width: '100%', minHeight: '100%', marginTop: '30px', display: 'flex',
                flexDirection: 'column', alignItems: 'center'
            }}>
                <h1 style={{ marginBottom: '30px', fontSize: '20px' }}>Gestionar productos</h1>

                {products.map(user => (
                    <motion.div layoutId={user._id} key={user._id} style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <div className='card'>
                            <img src={user.principalImage} alt={user.name} />
                            <h3>{user.name}</h3>
                            <h3>Descripcion: {user.description}</h3>
                            <h3>Stock: {user.stock}</h3>
                            <h3>Price: {user.price}</h3>
                            <h3 style={{marginRight: 30}}>{user.email}</h3>

                            <div className="card__buttons">
                                <FontAwesomeIcon icon={faPencil} className='edit' onClick={() => setSelectedId(user._id)}/>
                                <FontAwesomeIcon icon={faTrash} className='delete' onClick={() => handleDelete(user._id)}/> 
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedId && 
                    <motion.div layoutId={selectedId} style={{position: 'fixed', background: '#00000080', width: '100vw', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999}}>
                        <EditItemForm inputs={inputs} item={productSelected} form={form} setForm={setForm}
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

export default ManageProducts;