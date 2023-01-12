import React, { useContext, useState, useEffect } from 'react';
import {motion} from 'framer-motion';
import './CardModal.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import MobilePreview from './MobilePreview';
import CardModalNav from './CardModalNav';
import CardModalFormData from './CardModalFormData';
import MobilePreviewContent from './MobilePreviewContent';
import CardDataContext from './CardData.provider';
import CardModalSocialMedia from './CardModalSocialMedia';
import FinishCard from './FinishCard';
import DesignForm from './DesignForm';
import logo from '../../assets/logo.png';
import logoSmall from '../../assets/logoSmall.png';

const CardModal = ({setIsCreating, isEditing}) => {
    const {cardData, setCardData, handleInputs, resetAll} = useContext(CardDataContext);
    const [section, setSection] = useState('data');

    useEffect(() => {
        console.log(isEditing)
        if(isEditing) {
            setCardData({
                ...isEditing,
                styles: isEditing.cardStyle,
                profilePhotoUrl: isEditing.perfilImage,
                coverPhotoUrl: isEditing.coverPhoto,
                logoUrl: isEditing.logoPhoto,

            });
        }
    }, [isEditing, setCardData])

    return (
        <motion.div className='card_modal'>
            <FontAwesomeIcon icon={faXmark} onClick={(e) => {
                resetAll(e);
                setIsCreating(false);
            }} 
            className='close_modal' />

            <div className="card_modal_container">
                <div className="card_modal_form">
                    <CardModalNav setSection={setSection} section={section}/>

                    {section === 'data' && <CardModalFormData />}
                    {section === 'socialMedia' && <CardModalSocialMedia />}
                    {section === 'design' && <DesignForm />}
                    {section === 'finish' && <FinishCard setIsCreating={setIsCreating} isEditing={isEditing}/>}
                </div>


                <div className="card_modal_preview">
                    <select name="mobilePreview" id="card_type" onChange={(e) => handleInputs(e)}>
                        <option value="iphonex">Iphone X</option>
                        <option value="galaxynote8">Galaxy Note 8</option>
                        <option value="iphone8">iPhone 8</option>
                        <option value="iphone8plus">iPhone 8 Plus</option>
                        <option value="iphone5s">iPhone 5S</option>
                        <option value="iphone5c">iPhone 5C</option>
                        <option value="nexus5">Nexus 5</option>
                        <option value="galaxyS5">Samsung Galaxy S5</option>
                        <option value="htcone">HTC One</option>
                    </select>

                    <div className="preview_container">
                        <MobilePreview>
                            <MobilePreviewContent />
                        </MobilePreview>
                    </div>
                </div>
            </div>
            
        </motion.div>
    );
}

export default CardModal;
