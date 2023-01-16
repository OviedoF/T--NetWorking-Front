import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DashboardNav from '../components/dashboard/DashboardNav';
import './DashboardPage.scss'
import {motion} from 'framer-motion';
import axios from 'axios';
import env from '../env';

const Comment = () => {
    const auth = useSelector(state => state.auth);
    const [description, setDescription] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(`${env.API_URL}/comments`, {
            description: description,
            author: auth._id
        })
        .then(res => {
            console.log(res);
            setSuccess(true);
            setError(false);
        })
        .catch(err => {
            console.log(err);
            setError(true);
            setSuccess(false);
        });
    }


    return (
        <main className='dashboard_main' style={{display: 'flex', height: '100vh'}}>
            <DashboardNav auth={auth}/>

            <div style={{width: '80%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <form action="" style={{padding: '40px 20px', width: '50%'}} onSubmit={(e) => handleSubmit(e)} >
                    <h1 style={{textAlign: 'center', fontSize: 25, marginBottom: 20}}>Mandanos tu comentario! ;)</h1>
                    <textarea maxLength={200} name="description" id="" cols="30" rows="10" style={{width: '100%', height: 250, background: '#ffffff80', fontSize: 20, resize: 'none', color: 'black'}}
                    onChange={(e) => setDescription(e.target.value)}/>

                    {success && <p style={{backgroundColor: 'var(--color-success)', textAlign: 'center', marginTop: 20, color: 'white', padding: '10px 0'}}>Comentario enviado con exito! Muchísimas gracias!</p>}
                    {error && <p style={{backgroundColor: 'var(--color-danger)', textAlign: 'center', marginTop: 20, color: 'white', padding: '10px 0'}}>Hubo un error al enviar el comentario</p>}

                    <motion.button type='submit' whileHover={{scale: 1.02}}
                    style={{width: '100%', height: 50, background: 'var(--card-color)', fontSize: 20, marginTop: 20, border: 'none', cursor: 'pointer', color: 'white', borderRadius: 50}}>
                        Enviar
                    </motion.button>
                </form>
            </div>
        </main>
    );
}

export default Comment;
