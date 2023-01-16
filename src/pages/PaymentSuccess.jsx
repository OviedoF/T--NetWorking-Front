import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

const PaymentSuccess = () => {
    return (
        <main style={{padding: 60, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faCheck } style={{fontSize: 200, color: 'green'}} />
            <h1 style={{marginTop: 20, fontSize: 30}}>Pago completado</h1>

            <p style={{marginTop: 20, fontSize: 20}}>Gracias por su compra</p>

            <Link href={routes.home} style={{marginTop: 20, fontSize: 20, color: 'blue'}}>Volver al inicio</Link>
        </main>
    );
}

export default PaymentSuccess;
