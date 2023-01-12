import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../env';
import DashboardNav from '../components/dashboard/DashboardNav';
import { motion } from 'framer-motion';
import EditItemForm from '../components/admin-panel/EditItemForm';
import { useSelector, useDispatch } from 'react-redux';
import './UserConfig.scss';
import {authLogin} from '../redux/actions/auth.actions';
import { TailSpin } from 'react-loader-spinner';

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
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errores, setErrores] = useState(false);
    const [perfilTypes, setPerfilTypes] = useState([]);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const getPerfilTypes = async () => {
        const permission = auth.membership[0].permissions.find(permission => {
            return permission.permission === 'Tipos de perfil'
        })

        setPerfilTypes(permission.access);
    }

    useEffect(() => {
        window.addEventListener('resize', () => setWindowsSize(window.innerWidth));

        getPerfilTypes();

        setForm({
            firstName: auth.firstName,
            lastName: auth.lastName,
            username: auth.username,
            privacyType: auth.privacyType
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();

        for (const key in form) {
            formData.append(key, form[key]);
        }

        axios.put(`${env.API_URL}/users/update/${auth._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => {
            dispatch(authLogin({
                ...res.data,
                token: auth.token,
                membership: auth.membership,
                cards: auth.cards,
                roles: auth.roles
            }));

            setSuccess(true);
            setErrores(false);
            setIsLoading(false);
        })
        .catch(err => {
            setErrores(true);
            setSuccess(false);
            setIsLoading(false);
        });
    }



    if(auth) return (
        <main style={{ minHeight: '100vh', display: 'flex' }}>
            <DashboardNav auth={auth}/>

            {isLoading && <motion.div style={{ width: windowsSize > 530 ? '80%' : '100%', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>

                <TailSpin color="#000" height={100} width={100} />

            </motion.div>}

            {!isLoading && <motion.div style={{ width: windowsSize > 530 ? '80%' : '100%', height: '100vh', top: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999 }}>
                <form action="" id='user_config_form'>
                    <div className="form-group">
                        <label htmlFor="firstName">Nombre</label>
                        <input type="text" className="form-control" id="firstName" placeholder="Nombre" defaultValue={form.firstName} onChange={(e) => setForm({...form, [e.target.id]: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Apellido</label>
                        <input type="text" className="form-control" id="lastName" placeholder="Apellido" defaultValue={form.lastName} onChange={(e) => setForm({...form, [e.target.id]: e.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Nombre de usuario</label>
                        <input type="text" className="form-control" id="username" placeholder="Nombre de usuario" defaultValue={form.username} onChange={(e) => setForm({...form, [e.target.id]: e.target.value})}/>
                    </div>

                    <div className="form-group perfilImage">
                        <label htmlFor="images" id='perfilimage_label'>Imagen de perfil</label>
                        {form.images && <p>Imágen seccionada:</p> }
                        <input type="file" className="form-control-file" id="images" onChange={(e) => setForm({...form, [e.target.id]: e.target.files[0]})}/>
                    </div>

                    <div className="form-group checks">
                        <label htmlFor="privacyType">Tipo de cuenta</label>

                        {
                            perfilTypes.map((type, index) => {
                                return (
                                    <div className="form-check" key={index} id={form.privacyType === type ? 'type_active' : ''} onClick={(e) => setForm({...form, privacyType: type})}>
                                        {type === 'public' && 'Pública'}
                                        {type === 'private' && 'Privada'}
                                        {type === 'vip' && 'V.I.P'}
                                    </div>
                                )
                            })
                        }
                    </div>

                    {success && <p style={{color: 'var(--color-success)'}}>Usuario actualizado correctamente</p>}
                    {errores && <p style={{color: 'var(--color-danger)'}}>Ha ocurrido un error</p>}

                    <button type="submit" className="btn btn-primary" onClick={(e) => handleSubmit(e)}>Guardar</button>
                </form>
            </motion.div>}

        </main>
    );
}

export default UserConfig;
