import React, { useState, useEffect } from 'react';
import {motion } from 'framer-motion';
import './AdminPanel.scss';
import { Link } from 'react-router-dom';
import routes from '../../router/routes';
import { useNavigate } from 'react-router-dom';

const adminPanelActions = [
    {
        name: 'Lista de usuarios',
        category: 'manage',
        path: '/admin-panel/users'
    },
    {
        name: 'Lista de productos',
        category: 'manage',
        path: '/admin-panel/products'
    },
    {
        name: 'Lista de membresías',
        category: 'manage',
        path: '/admin-panel/memberships'
    },
    {
        name: 'Gestionar pedidos',
        category: 'manage',
        path: '/admin-panel/orders'
    },
    {
        name: 'Gestionar cupones',
        category: 'manage',
        path: '/admin-panel/coupons'
    },
    {
        name: 'Editar usuario administrador',
        category: 'manage',
        path: '/admin-panel/edit-admin-user'
    },
    {
        name: 'Administrar noticias',
        category: 'manage',
        path: '/admin-panel/news'
    },
    {
        name: 'Administrar categorías',
        category: 'manage',
        path: '/admin-panel/categories'
    },
    {
        name: 'Crear usuario moderador',
        category: 'create',
        path: routes.createModUser
    },
    {
        name: 'Crear producto',
        category: 'create',
        path: routes.createProduct
    },
    {
        name: 'Crear membresía',
        category: 'create',
        path: '/admin-panel/create-membership'
    },
    {
        name: 'Crear cupón',
        category: 'create',
        path: routes.createCoupon
    },
    {
        name: 'Crear noticia',
        category: 'create',
        path: routes.createNews
    },
    {
        name: 'Crear categoría',
        category: 'create',
        path: routes.createCategory
    }
];


const AdminPanelContent = () => {
    const [manageActions, setManageActions] = useState([]);
    const [createActions, setCreateActions] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        setManageActions(adminPanelActions.filter(action => action.category === 'manage'));
        setCreateActions(adminPanelActions.filter(action => action.category === 'create'));
    }, []);

    const transitionTime = .5;

    return (
        <motion.div className='admin_panel'>
            <motion.div className='admin_panel__manage'>
                <h2 className='admin_panel__manage__title'>Gestión</h2>
                <ul className='admin_panel__manage__list'>
                    {manageActions.map((action, index) => (
                        <motion.li transition={{duration: transitionTime + (index*0.08)}} animate={{bottom: 0}} className='admin_panel__manage__list__item' key={action.name}>
                            <Link className='admin_panel__manage__list__item__link' to={action.path}>
                                {action.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div className='admin_panel__create'>
                <h2 className='admin_panel__create__title'>Creación</h2>
                <ul className='admin_panel__create__list'>
                    {createActions.map((action, index) => (
                        <motion.li transition={{duration: transitionTime +(index*0.1)}} animate={{top: 0}} className='admin_panel__create__list__item' key={action.name} onClick={() => navigate(action.path)}>
                            <Link className='admin_panel__create__list__item__link' to={action.path}>
                                {action.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}

export default AdminPanelContent;
