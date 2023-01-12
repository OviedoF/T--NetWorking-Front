import React, { useState } from 'react';
import ModalData from './ModalData';
import './Presentation.scss';
import PresentationImages from './PresentationImages';
import PresentationInfo from './PresentationInfo';

const Presentation = ({product}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className='presentation'>
            <PresentationImages product={product} />
            <PresentationInfo product={product} setIsModalOpen={setIsModalOpen} 
            quantity={quantity} setQuantity={setQuantity}/>

            {isModalOpen && <ModalData product={product} setIsModalOpen={setIsModalOpen} 
            quantity={quantity}/> }
        </div>
    );
}

export default Presentation;
