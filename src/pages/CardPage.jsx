import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import env from '../env';
import {motion } from 'framer-motion';
import './CardPage.scss'
import SocialMedia from '../components/card/CardModalSocialMedia.data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardPage = () => {
    const { link } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [card, setCard] = useState({});

    const greyImage = 'https://res.cloudinary.com/syphhy/image/upload/v1672684987/grey-background-07_w4ukhq.jpg';

    const findIconSocial = (name) => {
        const icon = SocialMedia.find((socialMedia) => socialMedia.name === name);
        return icon.icon;
    }

    useEffect(() => {
        setIsLoading(true);

        axios.get(`${env.API_URL}/card/${link}`)
            .then((res) => {
                setCard(res.data.card);
                setIsLoading(false);
                console.log(res.data.card)
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });

    }, []);
    
    if(isLoading) return (
        <div className='loading_container'>
            <h1>Loading...</h1>
            <TailSpin color='black' />
        </div>
    );

    if(!isLoading) return (
        <div className='preview_content' style={{backgroundColor: card.cardStyle.body.backgroundColor || 'black'}}>
            <motion.div animate={{transform: 'scale(1)'}} className="preview_header">
                <img src={card.coverPhoto || greyImage} alt="Prevista portada" id='preview_cover_photo' />

                <motion.div animate={{transform: 'scale(1)'}} className="preview_header_user">
                    <img src={card.perfilImage || greyImage} alt="Prevista foto de perfil" id='preview_profile_photo' 
                    style={card.cardStyle.profilePhoto}/>
                    <img src={card.logoPhoto || greyImage} alt="Prevista del logo" id='preview_profile_logo' 
                    style={card.cardStyle.logo}/>
                </motion.div>
            </motion.div>

            <motion.div animate={{transform: 'scale(1)'}} className="preview_body">
                <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user">
                    <h2 id='preview_username' style={{...card.cardStyle.name, textAlign: card.cardStyle.name.textAlign}}>{card.name}</h2>

                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user_job">
                        <h3 id='preview_job_position' style={card.cardStyle.job}>{card.jobPosition || 'Puesto'} - {card.jobEntity || 'Empresa'}</h3>
                    </motion.div>

                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user_email">
                        <h3 id='preview_email' style={card.cardStyle.email}>{card.email || 'biznes@contacto.com'}</h3>
                    </motion.div>

                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user_biography">
                        <p id='preview_biography' style={card.cardStyle.biography}>{card.biography || 'Una breve descripción suya.'}</p>
                    </motion.div>
                </motion.div>

                {card.vcardWants &&
                    <motion.a href={card.vcard} download animate={{transform: 'scale(1)'}} className="preview_body_vcard" >
                        <button style={card.cardStyle.buttonVCard}>Descargar tarjeta personal</button>       
                    </motion.a>
                }

                {card.addContact && 
                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_vcard">
                        <button style={card.cardStyle.buttonContact}>
                            <a href={''} style={{color: card.cardStyle.buttonContact.color, textDecoration: 'none'}} onClick={(e) => e.preventDefault()}>
                                Agregar a {`+56-${card.cellphone || '...'}`}
                            </a>
                        </button>
                    </motion.div>
                }

                <motion.div animate={{transform: 'scale(1)'}} className="preview_body_social">
                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_social_icons">
                        <motion.div animate={{transform: 'scale(1)'}} className="favorites">
                            {card.socialMedia.filter((el) => el.favorite).map((icon, index) => (
                                <a href={icon.url} key={index} target='_blank' rel='noreferrer' style={{borderRadius: card.cardStyle.buttonSocialFavorite.borderRadius, 
                                backgroundColor: card.cardStyle.buttonSocialFavorite.backgroundColor || icon.color}} 
                                className="favorite">
                                    <FontAwesomeIcon icon={findIconSocial(icon.name)} style={{color: card.cardStyle.buttonSocialFavorite.color || icon.contrast}}/>
                                </a>
                            ))}
                        </motion.div>


                        {card.socialMedia.filter((el) => !el.favorite).map((icon, index) => (
                            <a href={icon.url} key={index} target='_blank' rel='noreferrer' style={{borderRadius: card.cardStyle.buttonSocial.borderRadius, 
                                backgroundColor: card.cardStyle.buttonSocial.backgroundColor || icon.color}} className="nofavorite">
                                <FontAwesomeIcon icon={findIconSocial(icon.name)} style={{color: card.cardStyle.buttonSocial.color || icon.contrast}}/>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default CardPage;
