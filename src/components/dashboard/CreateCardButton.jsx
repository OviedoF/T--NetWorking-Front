import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CreateCardButton = ({width, height, setIsCreating}) => {
    return (
        <div className="create_card_button" style={{
            width: width,
            height: height
        }}
        onClick={() => setIsCreating(true)}>
            
            <FontAwesomeIcon icon={faPlus} />

            <h3>Haz click aquí para crear una nueva tarjeta.</h3>
        </div>
    );
}

export default CreateCardButton;
