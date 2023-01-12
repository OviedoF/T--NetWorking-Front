import React from 'react';
import {motion } from 'framer-motion';
import './UserSearch.scss';
import { useNavigate } from 'react-router-dom';
import routes from '../../router/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

const UserCard = ({user}) => {
    const navigate = useNavigate();
    console.log(user)

    return (
        <motion.div className='user_card' whileHover={{scale: 1.1, cursor: 'pointer'}} whileTap={{scale: 0.9}}
        animate={{transform: 'scale(1)'}} transition={{duration: 0.45}}>
                <img src={user.userImage} alt={user.name} />
                <p style={{color: 'black', textAlign: 'center'}}>{user.firstName} {user.lastName}</p>
                <p>{user.email}</p>

                {user.privacyType === 'public' && <button onClick={() => navigate(`${routes.userPagePath}/${user._id}`)}>Ver tarjetas</button>}

                {user.privacyType === 'private' && <FontAwesomeIcon icon={faLock} />}
        </motion.div>
    );
}

export default UserCard;
