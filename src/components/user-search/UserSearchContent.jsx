import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import './UserSearch.scss';

const UserSearchContent = ({users}) => {
    const [search, setSearch] = useState('');
    const [usersFiltered, setUsersFiltered] = useState([]);

    useEffect(() => {
        const finded = users.filter(user => {
            if(user.name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase())) {
                return user;
            }
        })

        setUsersFiltered(finded);
    }, [search]);

    return (
        <div className='user_search_container'>
            <div className="finder">
                <h1>Busca a un usuario por su nombre o nombre de usuario</h1>
                <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            <div className="users">
                {usersFiltered.map(user => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UserSearchContent;
