import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../../pages/PageNotFound';
import routes from '../../router/routes';

const ProtectedRoute = ({children, condition}) => {
    const auth = useSelector(state => state.auth);
    const navigate = useNavigate();
    const [permission, setPermission] = useState(false);

    useEffect(() => {
        if(condition === 'admin') {
            if(auth.logged && auth.roles.includes('admin') ) {
                setPermission(true);
            }
        }
    }, []);

    if(!permission) (
        <PageNotFound />
    )
    
    if(permission) return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;
