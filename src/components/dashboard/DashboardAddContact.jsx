import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import {modalAppearAnimation, sizeUpXAnimation} from '../../styles/animations.js';
import './DashboardAddContact.scss';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import env from '../../env';
import ActualizeUser from '../../helpers/ActualizeUser.js';

const DashboardAddContact = ({activeSocial, setActiveSocial}) => {
    const [closeButton, setCloseButton] = useState(false);
    const [form, setForm] = useState([]);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.placeholder]: {
                name: e.target.placeholder,
                link: e.target.value
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        const keys = Object.keys(form);
        const values = Object.values(form);

        axios.put(`${env.API_URL}/users/${auth._id}/updateUserSocial`, {
            socialMedia: values
        })
            .then(res => ActualizeUser(localStorage.getItem('token'), dispatch))
            .catch(err => console.log(err));
    }

    const getDefault = (social) => {
        const res = auth.socialMedia.filter(media => media.name === social);

        if(res.length > 0) {
            return res[0].link;
        } else {
            return '';
        }
    }

    return (
        <AnimatePresence>
            {activeSocial && (
                <motion.div className="social_media" transition={{duration: 0.7}} animate={modalAppearAnimation} onAnimationEnd={( ) => setCloseButton(true)}>

                    <motion.div className='social_media_xmark' transition={{duration: 1}} animate={{right: '30px'}}>
                        <FontAwesomeIcon icon={faXmark} onClick={( ) => setActiveSocial(false)} />
                    </motion.div>


                    <motion.div className="social_media_container" transition={{duration: 0.7}} animate={{transform: 'scale(1)'}}>
                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon color='#FEFEFE' icon={faFacebook} />
                            <motion.input defaultValue={getDefault('Facebook')} onChange={(e) => handleChange(e)} animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Facebook' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon color='#FEFEFE' icon={faTwitter} />
                            <motion.input defaultValue={getDefault('Twitter')} onChange={(e) => handleChange(e)} animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Twitter' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon color='#FEFEFE' icon={faTiktok} />
                            <motion.input defaultValue={getDefault('TikTok')} onChange={(e) => handleChange(e)} animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='TikTok' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon color='#FEFEFE' icon={faInstagram} />
                            <motion.input defaultValue={getDefault('Instagram')} onChange={(e) => handleChange(e)} animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Instagram' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon color='#FEFEFE' icon={faLinkedin} />
                            <motion.input defaultValue={getDefault('LinkedIn')} onChange={(e) => handleChange(e)} animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='LinkedIn' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon color='#FEFEFE' icon={faGlobe} />
                            <motion.input defaultValue={getDefault('Sitio web')} onChange={(e) => handleChange(e)} animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Sitio web' />
                        </motion.div>

                        <motion.button className='social_media_button' transition={{duration: 0.5}} animate={{fontSize: '14px'}} onClick={() => setActiveSocial(false)}>
                            Cancelar
                        </motion.button>
                        
                        <motion.button className='social_media_button' transition={{duration: 0.5}} animate={{fontSize: '14px'}} onClick={(e) => handleSubmit(e)}>
                            Guardar
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default DashboardAddContact;
