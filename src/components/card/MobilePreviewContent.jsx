import React, {useContext} from 'react';
import './MobilePreviewContent.scss'
import CardDataContext from './CardData.provider';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import SocialMedia from './CardModalSocialMedia.data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logoSmall.png';

const MobilePreviewContent = () => {
    const {cardData, handleInputs} = useContext(CardDataContext);
    const auth = useSelector(state => state.auth);

    const greyImage = 'https://res.cloudinary.com/syphhy/image/upload/v1672684987/grey-background-07_w4ukhq.jpg';

    const findIconSocial = (name) => {
        const icon = SocialMedia.find((socialMedia) => socialMedia.name === name);
        return icon.icon;
    }

    return (
        <div className='preview_content' style={{backgroundColor: cardData.styles.body.backgroundColor}}>
            <motion.div animate={{transform: 'scale(1)'}} className="preview_header">
                <img src={cardData.coverPhotoUrl !== "false" ? cardData.coverPhotoUrl || logo : logo} alt="Prevista portada" id='preview_cover_photo' />

                <motion.div animate={{transform: 'scale(1)'}} className="preview_header_user">
                    <img src={cardData.profilePhotoUrl !== "false" ? cardData.profilePhotoUrl || greyImage : greyImage} alt="Prevista foto de perfil" id='preview_profile_photo' 
                    style={cardData.styles.profilePhoto}/>
                    <img src={cardData.logoUrl !== "false" ? cardData.logoUrl || logoSmall : logoSmall} alt="Prevista del logo" id='preview_profile_logo' 
                    style={cardData.styles.logo}/>
                </motion.div>
            </motion.div>

            <motion.div animate={{transform: 'scale(1)'}} className="preview_body">
                <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user">
                    <h2 id='preview_username' style={{...cardData.styles.name, textAlign: cardData.styles.name.textAlign}}>{auth.firstName} {auth.lastName}</h2>

                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user_job">
                        <h3 id='preview_job_position' style={cardData.styles.job}>{cardData.jobPosition || 'Puesto'} - {cardData.jobEntity || 'Empresa'}</h3>
                    </motion.div>

                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user_email">
                        <h3 id='preview_email' style={cardData.styles.email}>{cardData.email || 'biznes@contacto.com'}</h3>
                    </motion.div>

                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_user_biography">
                        <p id='preview_biography' style={cardData.styles.biography}>{cardData.biography || 'Una breve descripción suya.'}</p>
                    </motion.div>
                </motion.div>

                {cardData.vcard &&
                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_vcard" >
                        <button style={cardData.styles.buttonVCard}>Descargar tarjeta personal</button>       
                    </motion.div>
                }

                {cardData.addContact && 
                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_vcard">
                        <button style={cardData.styles.buttonContact}>
                            <a href={''} style={{color: cardData.styles.buttonContact.color, textDecoration: 'none'}} onClick={(e) => e.preventDefault()}>
                                Agregar a {`+56-${cardData.cellphone || '...'}`}
                            </a>
                        </button>
                    </motion.div>
                }

                <motion.div animate={{transform: 'scale(1)'}} className="preview_body_social">
                    <motion.div animate={{transform: 'scale(1)'}} className="preview_body_social_icons">
                        <motion.div animate={{transform: 'scale(1)'}} className="favorites">
                            {cardData.socialMedia.filter((el) => el.favorite).map((icon, index) => (
                                <a href={icon.url} key={index} target='_blank' rel='noreferrer' style={{borderRadius: cardData.styles.buttonSocialFavorite.borderRadius, 
                                backgroundColor: cardData.styles.buttonSocialFavorite.backgroundColor || icon.color}} 
                                className="favorite">
                                    <FontAwesomeIcon icon={findIconSocial(icon.name)} style={{color: cardData.styles.buttonSocialFavorite.color || icon.contrast}}/>
                                </a>
                            ))}
                        </motion.div>


                        {cardData.socialMedia.filter((el) => !el.favorite).map((icon, index) => (
                            <a href={icon.url} key={index} target='_blank' rel='noreferrer' style={{borderRadius: cardData.styles.buttonSocial.borderRadius, 
                                backgroundColor: cardData.styles.buttonSocial.backgroundColor || icon.color}} className="nofavorite">
                                <FontAwesomeIcon icon={findIconSocial(icon.name)} style={{color: cardData.styles.buttonSocial.color || icon.contrast}}/>
                            </a>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default MobilePreviewContent;
