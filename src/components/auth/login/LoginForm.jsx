import axios from 'axios';
import React, { useRef } from 'react';
import env from '../../../env';
import './LoginForm.scss';
import { useDispatch } from 'react-redux';
import {authLogin} from '../../../redux/actions/auth.actions'; 
import { useNavigate } from 'react-router-dom';
import routes from '../../../router/routes';

const LoginForm = ({ setError }) => {
    const emailInput = useRef();
    const passwordInput = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const identifyUser = () => {
        const token = localStorage.getItem('token');
        console.log(token);

        axios.post(`${env.API_URL}/auth/login/identifyUser`, {token})
        .then(res =>{
            dispatch( authLogin(res.data) )
            navigate(routes.dashboard)
        })
        .catch(err => console.log(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!passwordInput.current.value) return setError('La contraseña es requerida.');

        axios.post(`${env.API_URL}/auth/login`, {
            email: emailInput.current.value,
            password: passwordInput.current.value
        })
        .then(res => {
            localStorage.setItem('token', res.data.token);
            identifyUser();
            setError(false);
        })
        .catch(err => {
            if(err.response.status === 404) {
                setError(err.response.data.message);
            } else {
                setError('Ha ocurrido un error, intenta más tarde.');
            }
        });
    };

    return (
        <form action="" className='login_form' onSubmit={(e) => handleSubmit(e)}>
            <h1 className='login_form__title'>Inicia sesión</h1>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" ref={emailInput}/>
            </div>

            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" id="password" ref={passwordInput}/>
            </div>

            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
    );
}

export default LoginForm;
