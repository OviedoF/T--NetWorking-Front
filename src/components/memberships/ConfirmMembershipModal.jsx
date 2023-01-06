import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import env from '../../env';
import { useDispatch } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';
import { authLogin } from '../../redux/actions/auth.actions';

const ConfirmMembershipModal = ({membership, setIsPurchasing}) => {
    const auth = useSelector(state => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const dispatch = useDispatch();

    const actualizeUser = () => {
        console.log(auth.token)
        if(auth.token) { 
            axios.post(`${env.API_URL}/auth/login/identifyUser`, {
                token: auth.token
            })
            .then(res => dispatch(authLogin({
                ...res.data,
                token: auth.token
            })))
            .catch(err => console.log(err))
        } else {
            response = false
        }
    }

    const handleSend = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post(`${env.API_URL}/membershipPayment/success`, {membership: membership._id}, {headers: {
            idbuyer: auth._id
        }})
        .then(res => {
            setIsLoading(false);
            setIsSuccess(true);
            actualizeUser();
        })
        .catch(err => {
            setIsLoading(false);
            setIsError(true);
        });
    }

    if(isLoading) return (
        <div className='confirm_membership_modal'>
            <form>
                <h1>Actualizando membresía...</h1>
                <TailSpin />
            </form>
        </div>
    );

    if(isSuccess) return (
        <div className='confirm_membership_modal'>
            <form>
                <h1>Confirmar membresía</h1>
                <p>¡Membresía actualizada con éxito!</p>

                <div className="buttons">
                    <button className='confirm' onClick={() => setIsPurchasing(false)}>Aceptar</button>
                    <button className="">Ir a mi perfil</button>
                </div>
            </form>
        </div>
    );

    if(isError) return (
        <div className='confirm_membership_modal'>
            <form>
                <h1>Fallo al actualizar la membresía.</h1>
                <p style={{color: 'var(--color-danger)', fontSize: 20}}>Ha ocurrido un error al actualizar la membresía.</p>
                
                <div className="buttons">
                    <button className='' onClick={() => setIsPurchasing(false)}>Cerrar modal</button>
                </div>
            </form>
        </div>
    );

    if(!isLoading) return (
        <div className='confirm_membership_modal'>
            <form>
                <h1>Confirmar membresía</h1>
                <p>¿Estás seguro de que actualizar a membresía {membership.name}?</p>
                <p className="disclaimer">Al actualizar la membresía, el mes de tu membresía actual se cobrará de todas formas.</p>

                <div className="buttons">
                    <button className='cancel' onClick={() => setIsPurchasing(false)}>Cancelar</button>
                    <button className='confirm' onClick={(e) => handleSend(e)}>Confirmar</button>
                </div>
            </form>
        </div>
    );
}

export default ConfirmMembershipModal;
