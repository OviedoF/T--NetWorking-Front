import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../CardStyle.scss'

const CouponCard = ({coupon, setSelectedId}) => {
    return (
        <div className='card'>
            <h3>{coupon.name}</h3>
            <h3>{coupon.code}</h3>
            <h3>{coupon.discountPercent}%</h3>

            <div className="card__buttons">
                <FontAwesomeIcon icon={faPencil} className='edit' onClick={() => setSelectedId(coupon._id)}/>
                <FontAwesomeIcon icon={faTrash } className='delete'/> 
            </div>
        </div>
    );
}

export default CouponCard;
