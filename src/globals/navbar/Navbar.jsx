import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.scss';
import routes from '../../router/routes';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout } from '../../redux/actions/auth.actions';

const Navbar = () => {
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.removeItem('token');
        dispatch( authLogout() );
        navigate( routes.home );
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.top}>
                <p data-animation="appear">Siguenos en nuestro instagram! @mitienda</p>
                <input data-animation="appear" type="text" placeholder="Buscar" />
            </div>
            
            <nav className={styles.links}>
                <ul>
                    <li data-animation="appear">
                        <Link to={routes.home}>Inicio</Link>
                    </li>
                    <li data-animation="appear">
                        <Link to={routes.products}>Productos</Link>
                    </li>
                    <li data-animation="appear">
                        <Link to={routes.cart}>Mi carrito</Link>
                    </li>

                    {!auth.logged && <>
                        <li data-animation="appear">
                            <Link to={routes.login}>Login</Link>
                        </li>
                    </>}

                    {auth.logged && <>
                        <li data-animation="appear">
                            <Link to={routes.dashboard}>Dashboard</Link>
                        </li>

                        <li data-animation="appear">
                            <a onClick={() => logout()}>Logout</a>
                        </li>
                    </>}

                    {auth.logged && auth.roles.includes('admin') && 
                    <>
                        <li data-animation="appear" style={{color: '#FFD700'}}>
                            <Link to={routes.adminPanel}>Admin Panel</Link>
                        </li>
                    </>}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
