import React, { useState } from 'react';
import './Dashboard.scss'
import {AnimatePresence, motion} from 'framer-motion';
import NoCards from './NoCards';
import { CardDataProvider } from '../card/CardData.provider';
import CardModal from '../card/CardModal';
import { Link } from 'react-router-dom';
import CreateCardButton from './CreateCardButton';

export default function DashboardContent({auth}) {
    const [isCreating, setIsCreating] = useState(false);
    console.log(auth);

    const transitionDuration = 1;

  return (
    <div className='dashboard_content'>
        <motion.div className="cards_container" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            {auth.cards.length === 0 && <NoCards setIsCreating={setIsCreating}/>}

            {auth.cards.length > 0 && auth.cards.map((card, index) => (
                <div className="card" key={index}>
                    <div className="card_dashboard_preview">
                        <div className="card_dashboard_preview__header">
                            <img style={{width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomLeftRadius: 0}} 
                            src={card.coverPhoto} alt="cover" />
                            
                            <div className="card_dashboard_preview__header__userphoto">
                                <img className='perfil_photo' src={card.perfilImage} alt="user" />
                                <img className='enterprise_logo' src={card.logoPhoto} alt="logo" />
                            </div>
                        </div>
                        
                        <div className="card_dashboard_preview__header__info">
                                <h3>{card.name}</h3>

                                <div className="position">
                                    <p>{card.jobPosition} - </p>
                                    <p> {card.jobEntity}</p>
                                </div>
                        </div>

                        <Link className='link' to={`/card/${card.cardLink}`}>Ver tarjeta</Link>
                    </div>
                </div>
            ))}

            {auth.cards.length > 0 && <CreateCardButton width={300} height={300} setIsCreating={setIsCreating}/>}

        </motion.div>

        <motion.div className="container_data" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            <div className="membership">
                <motion.h2 transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}} >Tipo de membresía</motion.h2 >
                <motion.img transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} src={auth.membership[0].image || ''} alt='logo' />
                <motion.p transition={{duration: transitionDuration*1.5}} animate={{top: 0}} >Tiempo de membresía vigente: {auth.daysMembership} días</motion.p>
            </div>

            <div className="qr">
                <motion.h2 transition={{duration: transitionDuration*1.5}} animate={{bottom: 0}} >QR</motion.h2 >
                <motion.img transition={{duration: transitionDuration*1.5}} animate={{transform: 'scale(1)'}} src={auth.imageQr} alt='logo' />
                <motion.p transition={{duration: transitionDuration*1.5}} animate={{top: 0}}  className="info">Escanea esta imágen con la cámara de un dispositivo compatible con QR.</motion.p>
            </div>
        </motion.div>

        <AnimatePresence>
            <CardDataProvider auth={auth}>
                {isCreating && <CardModal setIsCreating={setIsCreating} />}
            </CardDataProvider>
        </AnimatePresence>
    </div>
  )
}
