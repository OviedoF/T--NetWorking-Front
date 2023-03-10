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
import CreateCategory from '../pages/admin/CreateCategory';
import CreateProduct from '../pages/admin/CreateProduct';
import CreateCoupon from '../pages/admin/CreateCoupon';
import CreateNews from '../pages/admin/CreateNews';
import env from '../env';
import { useDispatch } from 'react-redux';
import { authLogin } from '../redux/actions/auth.actions';
import axios from 'axios';
import CreateModUser from '../pages/admin/CreateModUser';
import ManageCategories from '../pages/admin/manage/ManageCategories';
import ManageNews from '../pages/admin/manage/ManageNews';

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

                <Route exact path={routes.createCategory} element={ 
                    <ProtectedRoute condition={'admin'}>
                        <CreateCategory />
                    </ProtectedRoute> 
                }/>

                <Route exact path={routes.createProduct} element={ 
                    <ProtectedRoute condition={'admin'}>
                        <CreateProduct />
                    </ProtectedRoute> 
                }/>

                <Route exact path={routes.createCoupon} element={ 
                    <ProtectedRoute condition={'admin'}>
                        <CreateCoupon />
                    </ProtectedRoute> 
                }/>

                <Route exact path={routes.createNews} element={ 
                    <ProtectedRoute condition={'admin'}>
                        <CreateNews />
                    </ProtectedRoute> 
                }/>

                <Route exact path={routes.createModUser} element={ 
                    <ProtectedRoute condition={'admin'}>
                        <CreateModUser />
                    </ProtectedRoute> 
                }/>

                <Route exact path={routes.manageCategories} element={ <ProtectedRoute condition={'admin'}> <ManageCategories /> </ProtectedRoute> }/>

                <Route exact path={routes.manageNews} element={ <ProtectedRoute condition={'admin'}> <ManageNews /> </ProtectedRoute> }/>


                <Route path={'/*'} element={<PageNotFound />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default AppRouter;
