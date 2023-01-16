import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import routes from '../../router/routes';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../redux/actions/auth.actions';
import logo from '../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuToggle, setMenuToggle] = useState(false);
    const [windowsSize, setWindowsSize] = useState(window.innerWidth);
    console.log(auth);

    const logout = () => {
        localStorage.removeItem('token');
        dispatch(authLogout());
        navigate(routes.home);
        location.href = routes.home;
    };

    return (
        <div style={{marginTop: 70}}>
            <nav id="navbar">
                <div className="nav-wrapper">
                    <div className="logo" style={{padding: 1}}>
                        <Link to={routes.home}>
                            <img src={logo} alt="logo" style={{height: '100%', objectFit: 'cover', transform: 'scale(3)'}} />
                        </Link>
                    </div>

                    <ul id="menu">
                        <li><Link to={routes.home}>Inicio</Link></li>
                        <li><Link to={routes.products}>Productos</Link></li>
                        <li><Link to={routes.aboutWe}>Sobre nosotros</Link></li>
                        
                        
                        {!auth.logged && <li><Link to={routes.login}>Login</Link></li>}
                        {!auth.logged && <li><Link to={routes.register}>Register</Link></li>}

                        {auth.logged && <li><Link to={routes.cart}>Carrito de compras</Link></li>}
                        {auth.logged && <li><Link to={routes.dashboard}>Dashboard</Link></li>}
                        {auth.logged && <li><Link to={routes.actualizeMembership}>Membresía</Link></li>}
                        {auth.logged && <li><Link onClick={() => logout()}>Logout</Link></li>}
                        {auth.roles && auth.roles.includes('admin') && <li><Link to={routes.adminPanel}>Admin</Link></li>}
                    </ul>
                </div>
            </nav>

            <div className="menuIcon" onClick={() => setMenuToggle(!menuToggle)}>
                <span className="icon icon-bars"></span>
                <span className="icon icon-bars overlay"></span>
            </div>


            <div className={menuToggle ? 'overlay-menu active' : 'overlay-menu'}>
                <FontAwesomeIcon icon={faXmark} onClick={() => setMenuToggle(false)} id='close-overlay-menu' />

                <ul id="menu">
                    <li onClick={() => setMenuToggle(false)}><Link to={routes.home}>Inicio</Link></li>
                    <li onClick={() => setMenuToggle(false)}><Link to={routes.products}>Productos</Link></li>
                    <li onClick={() => setMenuToggle(false)}><Link to={routes.aboutWe}>Sobre nosotros</Link></li>
                    {auth.logged && <li onClick={() => setMenuToggle(false)}><Link to={routes.cart}>Carrito de compras</Link></li>}
                    {!auth.logged && <li onClick={() => setMenuToggle(false)}><Link to={routes.login}>Login</Link></li>}
                    {auth.logged && <li onClick={() => setMenuToggle(false)}><Link onClick={() => logout()}>Logout</Link></li>}
                    {auth.logged && <li onClick={() => setMenuToggle(false)}><Link to={routes.dashboard}>Dashboard</Link></li>}
                    {auth.logged && <li onClick={() => setMenuToggle(false)}><Link to={routes.profile}>Editar perfil</Link></li>}
                    {auth.logged && <li onClick={() => setMenuToggle(false)}><Link to={routes.orders}>Mis pedidos</Link></li>}
                    {auth.logged && <li onClick={() => setMenuToggle(false)}><Link to={routes.wishlist}>Usuarios</Link></li>}

                    {auth.roles && auth.roles.includes('admin') && <li><Link to={routes.adminPanel}>Admin</Link></li>}
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;
