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
        path: routes.manageUsers
    },
    {
        name: 'Lista de productos',
        category: 'manage',
        path: routes.manageProducts
    },
    {
        name: 'Gestionar pedidos',
        category: 'manage',
        path: routes.manageOrders
    },
    {
        name: 'Gestionar cupones',
        category: 'manage',
        path: routes.manageCoupons
    },
    {
        name: 'Editar usuario administrador',
        category: 'manage',
        path: routes.editAdmin
    },
    {
        name: 'Administrar noticias',
        category: 'manage',
        path: routes.manageNews
    },
    {
        name: 'Administrar categorías',
        category: 'manage',
        path: routes.manageCategories
    },
    {
        name: 'Crear usuario',
        category: 'create',
        path: routes.createModUser
    },
    {
        name: 'Crear producto',
        category: 'create',
        path: routes.createProduct
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
    },
    {
        name: 'Crear tarjeta de presentación',
        category: 'create',
        path: routes.createHeroCard
    },
    {
        name: 'Crear FAQ',
        category: 'create',
        path: routes.createFAQ
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
