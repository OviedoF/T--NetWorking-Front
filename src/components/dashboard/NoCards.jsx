import React from 'react';
import CreateCardButton from './CreateCardButton';

const NoCards = ({setIsCreating}) => {
    return (
        <div className="no_cards" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <h2>Todavía no tienes tarjetas, crea una y haz relucir tu marca!</h2>

            <CreateCardButton width={300} height={300} setIsCreating={setIsCreating}/>
        </div>
    );
}

export default NoCards;
