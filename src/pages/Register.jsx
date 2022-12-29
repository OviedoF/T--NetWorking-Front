import React from 'react';
import RegisterForm from '../components/auth/register/RegisterForm';

const Register = () => {
    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <section style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            paddingTop: 40, marginBottom: 50}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear usuario</h1>

                <RegisterForm />
            </section>
        </main>
    );
}

export default Register;
