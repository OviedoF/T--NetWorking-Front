import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import MercadoPagoMembresía from '../components/actualize-membership/MercadoPagoMembresía';
import ConfirmMembershipModal from '../components/memberships/ConfirmMembershipModal';
import MembershipCard from '../components/memberships/MembershipCard';
import env from '../env';
import './ActualizeMembership.scss'

const formatNumbers = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    return number.toString().replace(exp,rep);
}


const ActualizeMembership = () => {
    const [memberships, setMemberships] = useState([]);
    const [activeMembership, setActiveMembership] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [isPurchasing, setIsPurchasing] = useState(false);
    const [period, setPeriod] = useState('month');
    const [paymentID, setPaymentID] = useState(null);
    const subtext = ['Ideal para personas que quieran probar Biznes', 'Ideal para Founders, dueños de PyME y Emprendedores e Influencers', 'Ideal para altos ejecutivos, asesores, abogados que desean mayor privacidad y necesitan múltiples tarjetas']

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

    const BasicData = ['1 Tarjeta Biznes virtual', 'Nombre, Cargo y empresa', '3 links a redes sociales', 'Cambiar foto de perfil', 'Tarjeta pública'];
    const ProData = ['3 Tarjetas Biznes virtuales', 'Diseño de tarjeta virtual sin restricciones', 'Campos sin restricciones', 'Foto de perfil, portada y logo de empresa', 'Tarjetas pública o privada', '5% de descuento en la primera compra en productos'];
    const VipData = ['5 Tarjetas Biznes virtuales', 'Diseño de tarjeta virtual sin restricciones', 'Campos sin restricciones', 'Foto de perfil, portada y logo de empresa', 'Tarjetas pública, privada o invisible (confidencialidad)', '10% de descuento en la primera compra en productos'];
    const data = [BasicData, ProData, VipData];

    return (
        <main className='membership_main'>
            <h1>Actualizar membresía</h1>

            <div className="period_choose" style={{display: 'flex', color: 'black', marginBottom: 30}}>
                <p style={{margin: '0 20px'}} onClick={(e) => setPeriod('month')}>Mensual</p>
                /
                <p style={{margin: '0 20px'}} onClick={(e) => setPeriod('year')}>Anual</p>
            </div>

            {isPurchasing && activeMembership && 
            <ConfirmMembershipModal membership={{
                    ...activeMembership,
                    totalPrice,
                    period,
                    billingDay: new Date().getDate()
            }} setIsPurchasing={setIsPurchasing}/>}

            <div className="memberships_container">
                {memberships.map((membership, index) => (
                    <MembershipCard key={membership._id} membership={membership} setActiveMembership={setActiveMembership}
                    activeMembership={activeMembership} subtext={subtext[index]} 
                    data={data[index]} period={period}/>
                ))}
            </div>

            <div className="purchase">
                <div className="coupon">
                    <input type="text" placeholder="Código de cupón" />
                    <button>Aplicar</button>
                </div>

                {totalPrice > 0 && <button className='membership_payment' onClick={(e) => setIsPurchasing(true)} >Comprar</button>}

                <div className="total">
                    {totalPrice > 0 && <p>Total: CL ${
                        activeMembership.period === 'month' ? formatNumbers(parseInt(totalPrice)) : formatNumbers(parseInt(totalPrice * 10))    
                    } / {
                        activeMembership.period === 'month' ? 'mes' : 'año'
                    }</p>}
                </div>
            </div>

        </main>
    );
}

export default ActualizeMembership;
