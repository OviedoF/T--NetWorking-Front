import React, { useState, useEffect } from 'react';
import LoginForm from '../components/auth/login/LoginForm';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import axios from 'axios';
import env from '../env';
import { TailSpin } from 'react-loader-spinner';
import { useDispatch } from 'react-redux';
import { authLogin } from '../redux/actions/auth.actions';
import routes from '../router/routes';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const clientId = '63248102455-je3ia8b7ki4aftef0kfjovdmk5jl145t.apps.googleusercontent.com';
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        
    }, []);
    
    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({
                client_id: clientId,
                scope: 'profile email',
            });
        });
    }, [clientId]);

    const handleGoogleLogin = async (data) => {
        setLoading(true);

        axios.post(`${env.API_URL}/auth/google-oauth`, data)
            .then(res => {
                setLoading(false);
                dispatch( authLogin(res.data) );
                navigate(routes.dashboard);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            });
    }

    if(loading) return (
        <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <TailSpin color="#000000" />
        </main>
    );

    if(!loading) return (
        <main style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <LoginForm setError={setError} />

            {error && <p style={{color: 'red', fontSize: 18, marginTop: '30px', width: '24%', background: '#00000030', padding: '20px', borderRadius: '5px', textAlign: 'center'}} data-animation="appear">
                {error}
            </p>}

            <GoogleLogin 
                clientId={clientId}
                buttonText="Ingresa con Google"
                onSuccess={response => handleGoogleLogin(response.profileObj)}
                onFailure={response => console.log(response)}
                cookiePolicy={'single_host_origin'}
            />

        </main>
    );
}

export default Login;
