import React, { useState } from 'react';
import './Dashboard.scss'
import { AnimatePresence } from 'framer-motion';
import {motion} from 'framer-motion';
import {modalAppearAnimation, sizeUpXAnimation} from '../../styles/animations.js';
import DashboardAddContact from './DashboardAddContact';

export default function DashboardContent({auth}) {
    const [activeSocial, setActiveSocial] = useState(false);

    const transitionDuration = 1;

  return (
    <div className='dashboard_content'>
        <motion.div className="container_data" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            <div className="membership">
                <motion.h2 transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}} >Tipo de membresía</motion.h2 >
                <motion.img transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} src='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000' alt='logo' />
                <motion.p transition={{duration: transitionDuration*1.5}} animate={{top: 0}} >Tiempo de membresía vigente: 54 días</motion.p>
            </div>

            <div className="qr">
                <motion.h2 transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}} >QR</motion.h2 >
                <motion.img transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} src='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000' alt='logo' />
                <motion.p transition={{duration: transitionDuration*1.5}} animate={{top: 0}}  className="info">Escanea esta imágen con la cámara de un dispositivo compatible con QR.</motion.p>
            </div>
        </motion.div>

        <motion.div className="preview" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            <motion.h2  transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}}>Previsualización</motion.h2>

            <motion.div transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} className="preview_container">
                <img src={auth.userImage} alt="imágen de perfil" />
                <h3>{auth.username}</h3>
                <h4>CEO Versus APP</h4>

            </motion.div>
            
            <motion.button transition={{duration: transitionDuration*1.5}} animate={{top: 0}} onClick={() => setActiveSocial(true)}>Agregar método de contacto</motion.button>
        </motion.div>
        
        <DashboardAddContact activeSocial={activeSocial} setActiveSocial={setActiveSocial} />
    </div>
  )
}
