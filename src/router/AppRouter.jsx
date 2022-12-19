import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from '../globals/footer/Footer';
import NavbarRenderer from '../globals/navbar/NavbarRenderer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Product from '../pages/Product';
import Products from '../pages/Products';
import ShoppingCart from '../pages/ShoppingCart';
import routes from './routes';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <NavbarRenderer />

            <Routes>
                <Route exact path={routes.home} element={<Home/>} />
                <Route exact path={routes.products} element={<Products />} />
                <Route exact path={routes.product} element={<Product />} />
                <Route exact path={routes.login} element={<Login />} />
                <Route exact path={routes.cart} element={<ShoppingCart />} />
                <Route path={'/*'} element={<PageNotFound />} />
            </Routes>

            {/* <Footer /> */}
        </BrowserRouter>
    );
}

export default AppRouter;
