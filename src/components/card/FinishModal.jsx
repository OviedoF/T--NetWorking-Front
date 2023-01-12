import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import env from '../../env';
import './FinishCard.scss';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import CardDataContext from './CardData.provider';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/actions/auth.actions';
import { FidgetSpinner, TailSpin } from 'react-loader-spinner';
import {v4 as uuidv4} from 'uuid';


const FinishModal = ({setFinishing, setIsCreating, isEditing}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { cardData, resetAll } = useContext(CardDataContext);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const actualizarUser = () => {
        if(auth.token) {
            axios.post(`${env.API_URL}/auth/login/identifyUser`, {
                token: auth.token
            })
            .then(res => dispatch(authLogin({
                ...res.data,
                token: auth.token
            })))
            .catch(err => console.log(err))
        }
    }
    
    const handleSend = (e) => {
        e.preventDefault();
        setIsLoading(true);

        console.log(cardData.cardLink);


        const formData = new FormData();
        formData.append('name', `${auth.firstName} ${auth.lastName}`);
        formData.append('addContact', cardData.addContact);
        formData.append('vcardWants', cardData.vcard);
        formData.append('email', cardData.email);
        formData.append('biography', cardData.biography);
        formData.append('cellphone', cardData.cellphone);
        formData.append('images', cardData.profilePhoto);
        formData.append('images', cardData.coverPhoto);
        formData.append('images', cardData.logo);
        formData.append('jobEntity', cardData.jobEntity);
        formData.append('jobPosition', cardData.jobPosition);
        formData.append('cardLink', cardData.cardLink ? cardData.cardLink : uuidv4());

        cardData.socialMedia.forEach((social) => {
            formData.append('socialMedia', JSON.stringify(social));
        })

        formData.append('styles', JSON.stringify(cardData.styles));

        axios.post(`${env.API_URL}/card`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                userid: auth._id
            }
        })
        .then((res) => {
            console.log(res);
            setIsLoading(false);
            setIsCreating(false);
            actualizarUser();
            setFinishing(false);
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
            setError(err.response.data.message);
        })
    }

    const handleEdit = (e) => {
        e.preventDefault();

        setIsLoading(true);
        const formData = new FormData();
        formData.append('name', `${auth.firstName} ${auth.lastName}`);
        formData.append('addContact', cardData.addContact);
        formData.append('vcardWants', cardData.vcard ? true : false);
        formData.append('email', cardData.email);
        formData.append('biography', cardData.biography);
        formData.append('cellphone', cardData.cellphone);
        formData.append('images', cardData.profilePhoto);
        formData.append('images', cardData.coverPhoto);
        formData.append('images', cardData.logo);
        formData.append('jobEntity', cardData.jobEntity);
        formData.append('jobPosition', cardData.jobPosition);
        formData.append('cardLink', cardData.cardLink === '' ? isEditing.cardLink : cardData.cardLink);

        cardData.socialMedia.forEach((social) => {
            formData.append('socialMedia', JSON.stringify(social));
        })

        formData.append('styles', JSON.stringify(cardData.styles));

        axios.put(`${env.API_URL}/card/${cardData._id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                userid: auth._id
            }
        })
        .then((res) => {
            console.log(res);
            setIsLoading(false);
            setIsCreating(false);
            setFinishing(false);
            
            axios.post(`${env.API_URL}/auth/login/identifyUser`, {
                token: auth.token
            })
                .then(res => {
                    dispatch(authLogin({
                        ...res.data,
                        token: auth.token
                    }))

                    console.log('usuario actualizado')
                })
                .catch(err => console.log(err))
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
            setError(err.response.data.message);
        })
    }

    if(isLoading) return (
        <motion.div id='finish_modal' animate={{transform: 'scale(1)'}} >
            <form action="POST">
                <h2>Guardando tarjeta...</h2>

                <TailSpin className='loading' />
            </form>
        </motion.div>
    );

    if(!isLoading) return (
        <motion.div id='finish_modal' animate={{transform: 'scale(1)'}} >
            <form action="POST">
                <h2>¿Está seguro que quiere guardar su tarjeta?</h2>

                <div className="form_buttons">
                    <button onClick={(e) => isEditing ? handleEdit(e) : handleSend(e)} className='btn btn--save'>Sí</button>
                    <button className='btn btn--cancel' onClick={(e) => setFinishing(false)}>No</button>
                </div>

                {error && <p className='error' style={{marginTop: 30, color: 'var(--color-danger)', fontSize: 20}}>{error}</p>}

                <FontAwesomeIcon icon={faXmark} onClick={() => setFinishing(false)} className='close_modal' />
            </form>
        </motion.div>
    );
}

export default FinishModal;
