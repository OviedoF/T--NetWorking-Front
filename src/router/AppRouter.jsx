import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from '../globals/footer/Footer';
import NavbarRenderer from '../globals/navbar/NavbarRenderer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Product from '../pages/Product';
import Products from '../pages/Products';
import ShoppingCart from '../pages/ShoppingCart';
import Dashboard from '../pages/Dashboard';
import routes from './routes';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../globals/navbar/ProtectedRoute';
import env from '../env';
import { useDispatch } from 'react-redux';
import { authLogin } from '../redux/actions/auth.actions';
import axios from 'axios';

const AppRouter = () => {
    const dispatch = useDispatch();

    const identifyUser = () => {
        const token = localStorage.getItem('token');
        console.log(token);

        if(!token) return

        axios.post(`${env.API_URL}/auth/login/identifyUser`, {token})
        .then(res =>{
            dispatch( authLogin(res.data) )
        })
        .catch(err => console.log(err));
    };


    useEffect(() => {
        identifyUser();
    }, []);

    return (
        <BrowserRouter>
            <NavbarRenderer />

            <Routes>
                {/* USER ROUTES */}
                <Route exact path={routes.home} element={<Home/>} />
                <Route exact path={routes.products} element={<Products />} />
                <Route exact path={routes.product} element={<Product />} />
                <Route exact path={routes.login} element={<Login />} />
                <Route exact path={routes.cart} element={<ShoppingCart />} />
                <Route exact path={routes.dashboard} element={<Dashboard />} />

                {/* ADMIN ROUTES */}
                <Route exact path={routes.adminPanel} element={ 
                    <ProtectedRoute condition={'admin'}>
                        <AdminPanel />
                    </ProtectedRoute> 
                }/>

                <Route path={'/*'} element={<PageNotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
