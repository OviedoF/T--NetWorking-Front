import React from 'react'
import routes from '../../router/routes'
import { Link } from 'react-router-dom'
import './Dashboard.scss'

export default function DashboardNav() {
    return (
        <div className='dashboard_nav'>
            <img src='https://img.freepik.com/free-photo/abstract-luxury-blur-grey-color-gradient-used-as-background-studio-wall-display-your-products_1258-52609.jpg?w=2000' alt='logo' />

            <ul>
                <li><Link to={routes.dashboard}>Dashboard</Link></li>
                <li><Link to={routes.profile}>Configurar perfil</Link></li>
                <li><Link to={routes.history}>Historial de compras</Link></li>
                <li><Link to={routes.profiles}>Usuarios</Link></li>
            </ul>
        </div>
    )
}
