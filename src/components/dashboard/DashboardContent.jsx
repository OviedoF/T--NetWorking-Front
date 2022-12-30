import React, { useState } from 'react';
import './Dashboard.scss'
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import {faFacebook, faTwitter, faTiktok, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faXmark } from '@fortawesome/free-solid-svg-icons';
import {modalAppearAnimation, sizeUpXAnimation} from '../../styles/animations.js';
import DashboardAddContact from './DashboardAddContact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PreviewCard from './PreviewCard';

const socialIcons = {
    Facebook: faFacebook,
    Twitter: faTwitter,
    TikTok: faTiktok,
    Instagram: faInstagram,
    LinkedIn: faLinkedin,
    'Sitio web': faGlobe
}

export default function DashboardContent({auth}) {
    const [activeSocial, setActiveSocial] = useState(false);
    console.log(auth);

    const transitionDuration = 1;

    const socialIncludes = (social) => {
        return auth.socialMedia.some(s => s.name === social);
    }

  return (
    <div className='dashboard_content'>
        <motion.div className="container_data" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            <div className="membership">
                <motion.h2 transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}} >Tipo de membresía</motion.h2 >
                <motion.img transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} src={auth.membership[0].image} alt='logo' />
                <motion.p transition={{duration: transitionDuration*1.5}} animate={{top: 0}} >Tiempo de membresía vigente: {auth.daysMembership} días</motion.p>
            </div>

            <div className="qr">
                <motion.h2 transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}} >QR</motion.h2 >
                <motion.img transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} src={auth.imageQr} alt='logo' />
                <motion.p transition={{duration: transitionDuration*1.5}} animate={{top: 0}}  className="info">Escanea esta imágen con la cámara de un dispositivo compatible con QR.</motion.p>
            </div>
        </motion.div>

        <PreviewCard auth={auth} />

        {/* <motion.div className="preview" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            <motion.h2  transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}}>Previsualización</motion.h2>

            <motion.div transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} className="preview_container">
                <img src={auth.userImage} alt="imágen de perfil" />
                <h3>{auth.username}</h3>
                <h4>CEO Versus APP</h4>
            </motion.div>

            <motion.div transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} style={{display: 'flex', marginBottom: 40, flexWrap: 'wrap'}}>
                {auth.socialMedia.map((social, index) => {
                    return (
                        <div style={{display: 'flex', justifyContent: 'center', marginLeft: 20,  alignItems: 'center', marginTop: 20}}>
                            <FontAwesomeIcon icon={socialIcons[social.name]} style={{height: 30}}/>
                            <p style={{marginLeft: 10}}>{social.link}</p>
                        </div>
                    )
                })}
            </motion.div>

            <motion.a href={`tel:${auth.cellphone}`} transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} className="add_contact">
                Añadir contacto
            </motion.a>
            
            <motion.button transition={{duration: transitionDuration*1.5}} animate={{top: 0}} onClick={() => setActiveSocial(true)}>Agregar método de contacto</motion.button>
        </motion.div> */}
        
        <DashboardAddContact activeSocial={activeSocial} setActiveSocial={setActiveSocial} />
    </div>
  )
}
