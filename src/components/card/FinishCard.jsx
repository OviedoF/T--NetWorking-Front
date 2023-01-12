import React, { useState } from 'react';
import './FinishCard.scss';
import FinishModal from './FinishModal';

const FinishCard = ({setIsCreating, isEditing}) => {
    const [finishing, setFinishing] = useState(false);

    return (
        <div className='finish_card'>
            <h2>Terminar tarjeta Biznes</h2>

            <p>Para terminar tu tarjeta, solo tienes que darle click en el botón de abajo.</p>

            {finishing && <FinishModal setIsCreating={setIsCreating} setFinishing={setFinishing} isEditing={isEditing} />}

            <button onClick={(e) => {
                e.preventDefault();
                setFinishing(true);
            }} >Terminar</button>
        </div>
    );
}

export default FinishCard;
