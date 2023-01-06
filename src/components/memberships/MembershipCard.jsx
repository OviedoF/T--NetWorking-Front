import React from 'react';
import { useSelector } from 'react-redux';

const MembershipCard = ({membership, setActiveMembership, activeMembership}) => {
    const auth = useSelector(state => state.auth);
    console.log(auth);

    return (
        <div className='membership_card'>
            <img src={membership.image} alt="Imágen de membresía" />
            <h3>{membership.name}</h3>
            <p>{membership.description}</p>
            {membership.priceWithOffer > 0 && <p className='price_membership'>CL ${membership.priceWithOffer} <span>${membership.price}</span></p>}
            {membership.priceWithOffer === 0 && <p className='price_membership'>CL ${membership.price}</p>}

            {membership._id === auth.membership[0]._id && <button className='membership_add_button actual'>Membresía actual</button>} 
            {membership._id === activeMembership._id && membership._id !== auth.membership[0]._id && <button className='membership_add_button actual' style={{backgroundColor: 'black', color: 'yellow'}}>Membresía seleccionada</button>}
            {membership._id !== auth.membership[0]._id &&  membership._id !== activeMembership._id && 
            
            <button className='membership_add_button' onClick={(e) => setActiveMembership(membership)}>Quiero esta membresía!</button>}
        </div>
    );
}

export default MembershipCard
