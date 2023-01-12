import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';

const CheckIfMembership = ({children, value}) => {
    const auth = useSelector(state => state.auth);

    const check = () => {
        const permission = auth.membership[0].permissions.find(permission => permission.permission === value);
        
        return permission.access
    }

    return (
        <>
            {
                check() ? children : <div className='block'>
                    <p>Debes ser actualizar tu membresía. <FontAwesomeIcon icon={faLock} /></p>
                </div>
            }
        </>
    );
}

export default CheckIfMembership;
