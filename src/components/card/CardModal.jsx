import React, { useContext, useState } from 'react';
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

const CardModal = ({setIsCreating}) => {
    const {cardData, handleInputs} = useContext(CardDataContext);
    const [section, setSection] = useState('data');

    return (
        <motion.div className='card_modal'>
            <FontAwesomeIcon icon={faXmark} onClick={() => setIsCreating(false)} 
            className='close_modal' />

            <div className="card_modal_container">
                <div className="card_modal_form">
                    <CardModalNav setSection={setSection} section={section}/>

                    {section === 'data' && <CardModalFormData />}
                    {section === 'socialMedia' && <CardModalSocialMedia />}
                    {section === 'design' && <DesignForm />}
                    {section === 'finish' && <FinishCard />}
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
