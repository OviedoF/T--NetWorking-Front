import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const formatNumbers = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
}

const MembershipCard = ({membership, setActiveMembership, activeMembership, subtext, data, period}) => {
    const auth = useSelector(state => state.auth);
    console.log(auth);

    return (
        <div className='membership_card'>
            <h2>{membership.name}</h2>

            <div className="price">
                <p className="price_text">
                    $
                    <span className='price_number'>{
                        period === 'month' ? formatNumbers(parseInt(membership.price))
                        : formatNumbers(parseInt(membership.price * 10)) 
                    }</span>
                    <span className="price_month">/mes</span>
                </p>$
            </div>

            <p>{subtext}</p>

            <ul>
                {data.map((item, index) => (
                    <li key={index}>
                        <FontAwesomeIcon icon={faCheckCircle} className='membership_check' />
                        {item}
                    </li>
                ))}
            </ul>
      
            <button className="membership_add_button" onClick={(e) => {
                e.preventDefault();
                setActiveMembership({
                    ...membership,
                    period: period
                });
            }}>
                {activeMembership._id === membership._id ? 'Seleccionado' : 
                membership._id !== auth.membership[0]._id ? 'Seleccionar' : 'Actual'
                }
            </button>

        </div>
    );
}

export default MembershipCard
