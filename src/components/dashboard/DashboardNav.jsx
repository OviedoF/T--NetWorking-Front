import React from 'react'
import routes from '../../router/routes'
import { Link, useLocation } from 'react-router-dom'
import './Dashboard.scss'
import {motion} from 'framer-motion';

export default function DashboardNav({auth}) {
    const location = useLocation();
    console.log(location.pathname)

    const transitionDuration = 1;

    return (
        <motion.div transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} className='dashboard_nav'>
            <img src={auth.userImage} alt='perfil' />
            <h2>{auth.firstName} {auth.lastName}</h2>
            <h3>{auth.username}</h3>
            <h4>{auth.email}</h4>

            <div className="membership">
                <p>{auth.membership[0].name}</p>
            </div>

            <div className="membership" style={{backgroundColor: 'white'}}>
                <p>{auth.daysMembership} días </p>
            </div>

            <ul style={{paddingTop: 50}}>
                <motion.li transition={{duration: transitionDuration*1}} animate={{opacity: 1, top: 0}} ><Link className={location.pathname === "/dashboard" ? 'active' : ''} to={routes.dashboard}>Dashboard</Link></motion.li>
                
                <motion.li transition={{duration: transitionDuration*1.4}} animate={{opacity: 1, top: 0}} ><Link className={location.pathname === "/user-config" ? 'active' : ''} to={routes.userConfig}>Configurar perfil</Link></motion.li>
                
                <motion.li transition={{duration: transitionDuration*1.8}} animate={{opacity: 1, top: 0}} ><Link className={location.pathname === "/user-history" ? 'active' : ''} to={routes.userHistory}>Historial de compras</Link></motion.li>
                
                <motion.li transition={{duration: transitionDuration*2}} animate={{opacity: 1, top: 0}} ><Link className={location.pathname === "/user-search" ? 'active' : ''} to={routes.userSearch}>Usuarios</Link></motion.li>
                
                <motion.li transition={{duration: transitionDuration*2.2}} animate={{opacity: 1, top: 0}} ><Link className={location.pathname === "/comment" ? 'active' : ''} to={routes.comment}>Manda tu comentario!</Link></motion.li>
            </ul>
        </motion.div>
    )
}
