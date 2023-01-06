import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ConfirmMembershipModal from '../components/memberships/ConfirmMembershipModal';
import MembershipCard from '../components/memberships/MembershipCard';
import env from '../env';
import './ActualizeMembership.scss'

const ActualizeMembership = () => {
    const [memberships, setMemberships] = useState([]);
    const [activeMembership, setActiveMembership] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        axios.get(`${env.API_URL}/membership`)
        .then(res => setMemberships(res.data))
        .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if(activeMembership._id) {
            setTotalPrice(activeMembership.priceWithOffer > 0 ? activeMembership.priceWithOffer : activeMembership.price);
        }
    }, [activeMembership]);

    return (
        <main className='membership_main'>
            <h1>Actualizar membresía</h1>

            {isPurchasing && <ConfirmMembershipModal membership={activeMembership} setIsPurchasing={setIsPurchasing}/>}

            <div className="memberships_container">
                {memberships.map(membership => (
                    <MembershipCard key={membership._id} membership={membership} setActiveMembership={setActiveMembership}
                    activeMembership={activeMembership}/>
                ))}
            </div>

            <div className="purchase">
                <div className="coupon">
                    <input type="text" placeholder="Código de cupón" />
                    <button>Aplicar</button>
                </div>

                {totalPrice > 0 && <button className='membership_payment' onClick={(e) => setIsPurchasing(true)} >Comprar</button>}

                <div className="total">
                    {totalPrice > 0 && <p>Total: CL ${totalPrice}</p>}
                </div>
            </div>

        </main>
    );
}

export default ActualizeMembership;
