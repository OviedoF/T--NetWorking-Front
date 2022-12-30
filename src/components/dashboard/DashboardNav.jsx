import React from 'react'
import routes from '../../router/routes'
import { Link } from 'react-router-dom'
import './Dashboard.scss'
import {motion} from 'framer-motion';

export default function DashboardNav({auth}) {

    const transitionDuration = 1;

    return (
        <motion.div transition={{duration: transitionDuration}} animate={{opacity: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}} className='dashboard_nav'>
            <img src={auth.userImage} alt='perfil' />

            <ul>
                <motion.li transition={{duration: transitionDuration*1}} animate={{opacity: 1, top: 0}} ><Link to={routes.dashboard}>Dashboard</Link></motion.li>
                <motion.li transition={{duration: transitionDuration*1.4}} animate={{opacity: 1, top: 0}} ><Link to={routes.userConfig}>Configurar perfil</Link></motion.li>
                <motion.li transition={{duration: transitionDuration*1.8}} animate={{opacity: 1, top: 0}} ><Link to={routes.history}>Historial de compras</Link></motion.li>
                <motion.li transition={{duration: transitionDuration*2}} animate={{opacity: 1, top: 0}} ><Link to={routes.userSearch}>Usuarios</Link></motion.li>
                <motion.li transition={{duration: transitionDuration*2.2}} animate={{opacity: 1, top: 0}} ><Link to={routes.comment}>Manda tu comentario!</Link></motion.li>
            </ul>
        </motion.div>
    )
}
