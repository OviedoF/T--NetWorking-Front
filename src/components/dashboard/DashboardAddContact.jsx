import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import {modalAppearAnimation, sizeUpXAnimation} from '../../styles/animations.js';
import './DashboardAddContact.scss';


const DashboardAddContact = ({activeSocial, setActiveSocial}) => {
    const [closeButton, setCloseButton] = useState(false);

    return (
        <AnimatePresence>
            {activeSocial && (
                <motion.div className="social_media" transition={{duration: 0.7}} animate={modalAppearAnimation} onAnimationEnd={( ) => setCloseButton(true)}>

                    <motion.div className='social_media_xmark' transition={{duration: 1}} animate={{right: '30px'}}>
                        <FontAwesomeIcon icon={faXmark} onClick={( ) => setActiveSocial(false)} />
                    </motion.div>


                    <motion.div className="social_media_container" transition={{duration: 0.7}} animate={{transform: 'scale(1)'}}>
                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon icon={faFacebook} />
                            <motion.input animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Facebook' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon icon={faTwitter} />
                            <motion.input animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Twitter' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon icon={faTiktok} />
                            <motion.input animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='TikTok' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon icon={faInstagram} />
                            <motion.input animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Instagram' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon icon={faLinkedin} />
                            <motion.input animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='LinkedIn' />
                        </motion.div>

                        <motion.div className='social_media_input'>
                            <FontAwesomeIcon icon={faGlobe} />
                            <motion.input animate={{width: 'auto'}} transition={{duration: 1.5}} type="text" placeholder='Sitio web' />
                        </motion.div>

                        <motion.button className='social_media_button' transition={{duration: 0.5}} animate={{fontSize: '14px'}} onClick={() => setActiveSocial(false)}>
                            Cancelar
                        </motion.button>
                        
                        <motion.button className='social_media_button' transition={{duration: 0.5}} animate={{fontSize: '14px'}}>
                            Guardar
                        </motion.button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default DashboardAddContact;
