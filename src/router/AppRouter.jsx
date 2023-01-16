import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, HashRouter} from "react-router-dom";
import Footer from '../globals/footer/Footer';
import NavbarRenderer from '../globals/navbar/NavbarRenderer';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import Product from '../pages/Product';
import Products from '../pages/Products';
import UserPage from '../pages/UserPage';
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
import ManageCoupons from '../pages/admin/manage/ManageCoupons';
import ManageUsers from '../pages/admin/manage/ManageUsers';
import ManageProducts from '../pages/admin/manage/ManageProducts';
import ManageOrders from '../pages/admin/manage/ManageOrders';
import EditAdminForm from '../pages/admin/manage/EditAdminForm';
import UserSearch from '../pages/UserSearch';
import CardPage from '../pages/CardPage';
import UserConfig from '../pages/UserConfig.jsx';
import Register from '../pages/Register';
import Comment from '../pages/Comment';
import CreateMembershipPage from '../pages/admin/CreateMembershipPage';
import ActualizeMembership from '../pages/ActualizeMembership';
import AboutWe from '../pages/AboutWe';
import TermsAndConditions from '../pages/TermsAndConditions';
import FAQS from '../pages/FAQS';
import CreateHeroCard from '../pages/admin/CreateHeroCard';
import CreateFAQ from '../pages/admin/CreateFAQ';
import CreateBrand from '../pages/admin/CreateBrand';
import ManageBiznesInfo from '../pages/admin/manage/ManageBiznesInfo';
import ViewOrder from '../pages/admin/manage/ViewOrder';
import PaymentSuccess from '../pages/PaymentSuccess';
import ManageComments from '../pages/admin/manage/ManageComments';
import UserHistory from '../pages/UserHistory';

const AppRouter = () => {
    const dispatch = useDispatch();


    const identifyUser = () => {
        const token = localStorage.getItem('token');
        console.log(token);

        if(!token) return

        axios.post(`${env.API_URL}/auth/login/identifyUser`, {token})
        .then(res =>{
            dispatch( authLogin({
                ...res.data,
                token
            }) )
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        identifyUser();
    }, []);

    return (
        <HashRouter>

                <Routes>
                    <Route exact path={routes.cardPage} element={<CardPage />} />

                    <Route element={<NavbarRenderer />} >                    
                        {/* USER ROUTES */}
                        <Route exact path={routes.home} element={<Home/>} />
                        <Route exact path={routes.products} element={<Products />} />
                        <Route exact path={routes.product} element={<Product />} />
                        <Route exact path={routes.login} element={<Login />} />
                        <Route exact path={routes.cart} element={<ShoppingCart />} />
                        <Route exact path={routes.dashboard} element={<Dashboard />} />
                        <Route exact path={routes.userPage} element={<UserPage />} />
                        <Route exact path={routes.userSearch} element={<UserSearch />} />
                        <Route exact path={routes.userConfig} element={<UserConfig />} />
                        <Route exact path={routes.register} element={<Register />} />
                        <Route exact path={routes.successPayment} element={<Register />} />
                        <Route exact path={routes.comment} element={<Comment />} />
                        <Route exact path={routes.actualizeMembership} element={<ActualizeMembership />} />
                        <Route exact path={routes.aboutWe} element={<AboutWe />} />
                        <Route exact path={routes.termsAndConditions} element={<TermsAndConditions />} />
                        <Route exact path={routes.faqs} element={<FAQS />} />
                        <Route exact path={routes.paymentSuccess} element={<PaymentSuccess />} />
                        <Route exact path={routes.userHistory} element={<UserHistory />} />

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

                        <Route exact path={routes.createMembership} element={ <ProtectedRoute condition={'admin'}> <CreateMembershipPage /> </ProtectedRoute> }/>

                        <Route exact path={routes.manageCategories} element={ <ProtectedRoute condition={'admin'}> <ManageCategories /> </ProtectedRoute> }/>

                        <Route exact path={routes.manageNews} element={ <ProtectedRoute condition={'admin'}> <ManageNews /> </ProtectedRoute> }/>

                        <Route exact path={routes.manageCoupons} element={ <ProtectedRoute condition={'admin'}> <ManageCoupons/> </ProtectedRoute> }/>

                        <Route exact path={routes.manageUsers} element={ <ProtectedRoute condition={'admin'}> <ManageUsers /> </ProtectedRoute> }/>

                        <Route exact path={routes.manageProducts} element={ <ProtectedRoute condition={'admin'}> <ManageProducts /> </ProtectedRoute> }/>

                        <Route exact path={routes.manageOrders} element={ <ProtectedRoute condition={'admin'}> <ManageOrders /> </ProtectedRoute> }/>

                        <Route exact path={`${routes.manageOrders}/:id`} element={ <ProtectedRoute condition={'admin'}> <ViewOrder /> </ProtectedRoute> }/>

                        <Route exact path={routes.editAdmin} element={ <ProtectedRoute condition={'admin'}> <EditAdminForm /> </ProtectedRoute> }/>

                        <Route exact path={routes.createHeroCard} element={ <ProtectedRoute condition={'admin'}> <CreateHeroCard /> </ProtectedRoute> }/>

                        <Route exact path={routes.createFAQ} element={ <ProtectedRoute condition={'admin'}> <CreateFAQ /> </ProtectedRoute> }/>

                        <Route exact path={routes.createBrand} element={ <ProtectedRoute condition={'admin'}> <CreateBrand /> </ProtectedRoute> }/>
                        
                        <Route exact path={routes.manageInfo} element={ <ProtectedRoute condition={'admin'}> <ManageBiznesInfo /> </ProtectedRoute> }/>

                        <Route exact path={routes.manageComments} element={ <ProtectedRoute condition={'admin'}> <ManageComments /> </ProtectedRoute> }/>

                        <Route path={'/*'} element={<PageNotFound />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRouter;
