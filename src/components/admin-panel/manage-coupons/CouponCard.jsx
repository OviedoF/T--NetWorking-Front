import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import env from '../../../env';
import '../CardStyle.scss'

const CouponCard = ({coupon, setSelectedId, actualizeCoupons}) => {
    const auth = useSelector(state => state.auth);

    const handleDelete = () => {
        axios.delete(`${env.API_URL}/coupon/${coupon._id}`, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
            .then(res => actualizeCoupons())
            .catch(err => console.log(err));
    }

    return (
        <div className='card'>
            <h3>{coupon.name}</h3>
            <h3>{coupon.code}</h3>
            <h3>{coupon.discountPercent}%</h3>

            <div className="card__buttons">
                <FontAwesomeIcon icon={faPencil} className='edit' onClick={() => setSelectedId(coupon._id)}/>
                <FontAwesomeIcon icon={faTrash } className='delete' onClick={() => handleDelete()}/> 
            </div>
        </div>
    );
}

export default CouponCard;
