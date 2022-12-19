import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import routes from '../../router/routes';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.top}>
                <p data-animation="appear">Siguenos en nuestro instagram! @mitienda</p>
                <img data-animation="appear" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Instagram" />
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
                    <li data-animation="appear">
                        <Link to={routes.login}>Login</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
