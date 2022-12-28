import React from 'react';
import {motion } from 'framer-motion';
import './UserSearch.scss';
import { useNavigate } from 'react-router-dom';
import routes from '../../router/routes';

const UserCard = ({user}) => {
    const navigate = useNavigate();

    return (
        <motion.div className='user_card' whileHover={{scale: 1.1, cursor: 'pointer'}} whileTap={{scale: 0.9}}
        animate={{transform: 'scale(1)'}} transition={{duration: 0.45}} onClick={() => navigate(`${routes.userPagePath}/${user._id}`)}>
                <img src={user.userImage} alt={user.name} />
                <p>{user.name}</p>
        </motion.div>
    );
}

export default UserCard;
