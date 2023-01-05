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
import { FidgetSpinner } from 'react-loader-spinner';


const FinishModal = ({setFinishing, setIsCreating}) => {
    const [isLoading, setIsLoading] = useState(false);
    const { cardData, resetAll } = useContext(CardDataContext);
    const auth = useSelector(state => state.auth);
   
    console.log(auth)
     const handleSend = (e) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        formData.append('name', `${auth.firstName} ${auth.lastName}`);
        formData.append('addContact', cardData.addContact);
        formData.append('vcardWants', cardData.vcard);
        formData.append('email', cardData.email);
        formData.append('biography', cardData.biography);
        formData.append('cellphone', cardData.cellphone);
        formData.append('images', cardData.coverPhoto);
        formData.append('images', cardData.profilePhoto);
        formData.append('images', cardData.logo);
        formData.append('jobEntity', cardData.jobEntity);
        formData.append('jobPosition', cardData.jobPosition);
        formData.append('cardLink', cardData.cardLink);

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
        })
        .catch((err) => {
            console.log(err);
            setIsLoading(false);
        })

        setFinishing(false);
     }

    if(isLoading) return (
        <motion.div id='finish_modal' animate={{transform: 'scale(1)'}} >
            <form action="POST">
                <h2>Guardando tarjeta...</h2>

                <FidgetSpinner />
            </form>
        </motion.div>
    );

    if(!isLoading) return (
        <motion.div id='finish_modal' animate={{transform: 'scale(1)'}} >
            <form action="POST">
                <h2>¿Está seguro que quiere guardar su tarjeta?</h2>

                <div className="form_buttons">
                    <button onClick={(e) => handleSend(e)} className='btn btn--save'>Sí</button>
                    <button className='btn btn--cancel'>No</button>
                </div>

                <FontAwesomeIcon icon={faXmark} onClick={() => setFinishing(false)} className='close_modal' />
            </form>
        </motion.div>
    );
}

export default FinishModal;
