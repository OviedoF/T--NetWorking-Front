import React from 'react';
import { useSelector } from 'react-redux';

const formatNumbers = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
}

const MembershipCard = ({membership, setActiveMembership, activeMembership}) => {
    const auth = useSelector(state => state.auth);
    console.log(auth);

    return (
        <div className='membership_card'>
            <h2>{membership.name}</h2>

            <div className="price">
                $<span>{formatNumbers(parseInt(membership.price))}/mo</span>
            </div>
        </div>
    );
}

export default MembershipCard
