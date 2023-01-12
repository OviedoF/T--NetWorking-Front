import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import './UserSearch.scss';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const UserSearchContent = ({users}) => {
    const [search, setSearch] = useState('');
    const [usersFiltered, setUsersFiltered] = useState([]);

    useEffect(() => {
        const finded = users.filter(user => {
            const name = `${user.firstName} ${user.lastName}`

            if(name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase())) {
                return user;
            }
        })

        setUsersFiltered(finded);
    }, [search]);

    return (
        <div className='user_search_container'>
            <div className="finder">
                <FontAwesomeIcon icon={faSearch} />
                <input type='text' value={search} onChange={e => setSearch(e.target.value)} />
            </div>

            <p className="disclaimer">
            La Agenda Biznes es un listado de networking de todos los clientes que tienen pública su tipo de cuenta. 
            Si un usuario tiene cuenta privada, aparecerá en la lista pero no podrá ser visto su perfil.
            </p>

            <div className="users">
                {usersFiltered.map(user => (
                    <UserCard key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default UserSearchContent;
