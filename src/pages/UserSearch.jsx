import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DashboardNav from '../components/dashboard/DashboardNav';
import UserSearchContent from '../components/user-search/UserSearchContent';
import axios from 'axios';
import env from '../env';

const UserSearch = () => {
    const auth = useSelector(state => state.auth);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`${env.API_URL}/users`, {
            headers: {
                userid: auth._id,
                token: auth.token
            }
        })
        .then(res => {
            setUsers(res.data);
        })
        .catch(err => console.log(err));

        window.scrollTo(0, 0);
    }, []);

    return (
        <main className='dashboard_main' style={{display: 'flex', height: '100vh'}}>
            <DashboardNav auth={auth} />

            <UserSearchContent users={users}/>
        </main>
    );
}

export default UserSearch;
