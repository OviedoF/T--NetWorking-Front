import React, { useState } from 'react';
import './Dashboard.scss'
import {AnimatePresence, motion} from 'framer-motion';
import NoCards from './NoCards';
import { CardDataProvider } from '../card/CardData.provider';
import CardModal from '../card/CardModal';
import { Link } from 'react-router-dom';
import CreateCardButton from './CreateCardButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logoSmall.png';

export default function DashboardContent({auth, isBlocked}) {
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [qrActivated, setQrActivated] = useState(false);

    const transitionDuration = 1;

  const limitCards = () => {
    const permission = auth.membership[0].permissions.find(permission => permission.permission === 'Tarjetas');

    return permission.limit
  }

  return (
    <div className='dashboard_content'>

        {qrActivated && 
        <motion.div className="qr_modal_container" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            <img src={qrActivated} alt="IMÁGEN QR ACTIVADA" />
            <a href={qrActivated} download>Descargar QR</a>
            <FontAwesomeIcon icon={faXmark} onClick={(e) => setQrActivated(false)} />
        </motion.div>}

        <motion.div className="cards_container" transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}>
            {auth.cards.length === 0   && <NoCards setIsCreating={setIsCreating}/>}

            {auth.cards.length > 0 && auth.cards.map((card, index) => (
                <div className="card" key={index}>
                    {!isBlocked && <button className='edit_button' onClick={(e) => setIsEditing(card)}>Editar</button>}

                    <div className="card_dashboard_preview">
                        <div className="card_dashboard_preview__header">
                            <img style={{width: '100%', height: '100%', borderTopLeftRadius: 15, borderTopRightRadius: 15, borderBottomLeftRadius: 0}} 
                            src={card.coverPhoto !== "false" ? card.coverPhoto : logo} alt="cover" />
                            
                            <div className="card_dashboard_preview__header__userphoto">
                                <img className='perfil_photo' src={card.perfilImage} alt="user" />
                                <img className='enterprise_logo' src={card.logoPhoto !== "false" ? card.logoPhoto : logoSmall} alt="logo" />
                            </div>
                        </div>
                        
                        <div className="card_dashboard_preview__header__info">
                                <h3>{card.name}</h3>

                                <div className="position">
                                    <p>{card.jobPosition} - </p>
                                    <p> {card.jobEntity}</p>
                                </div>
                        </div>

                        <Link className='link' to={`/card/${card.cardLink}`} style={{background: 'var(--color-logo)', color: 'black'}}>Ver tarjeta</Link>

                        <img src={card.imageQr} alt="imágen QR" style={{width: 50, height: 50, position: 'absolute', left: '40%', bottom: 20, cursor: 'pointer'}} 
                        onClick={(e) => setQrActivated(card.imageQr)} />
                    </div>
                </div>
            ))}

            {auth.cards.length > 0 && auth.cards.length < limitCards() && !isBlocked && <CreateCardButton width={300} height={300} setIsCreating={setIsCreating}/>}

            {auth.cards.length > 0 && auth.cards.length >= limitCards() && !isBlocked && <div className="limit_reached">
                <p>Has alcanzado el límite de tarjetas</p>
                {auth.cards.length <= 5 && <p>Para crear más tarjetas, debes actualizar tu plan</p>}
            </div>}

        </motion.div>

        <AnimatePresence>
            <CardDataProvider auth={auth}>
                {isCreating && <CardModal setIsCreating={setIsCreating} />}

                {isEditing && <CardModal setIsCreating={setIsEditing} isEditing={isEditing} />}
            </CardDataProvider>
        </AnimatePresence>
    </div>
  )
}
