import React, { useState, useEffect } from 'react';
import LoginForm from '../components/auth/login/LoginForm';

const Login = () => {
    const [error, setError] = useState(false);

    return (
        <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <LoginForm setError={setError} />

            {error && <p style={{color: 'red', fontSize: 18, marginTop: '30px', width: '24%', background: '#00000030', padding: '20px', borderRadius: '5px', textAlign: 'center'}} data-animation="appear">
                {error}
            </p>}
        </main>
    );
}

export default Login;
