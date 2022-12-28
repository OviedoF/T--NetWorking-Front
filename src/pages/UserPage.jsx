import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HashLoader } from 'react-spinners';
import DashboardContent from '../components/dashboard/DashboardContent';
import env from '../env';
import './DashboardPage.scss'

export default function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log(id);
        axios.get(`${env.API_URL}/users/${id}`)
            .then(res => {
                setUser(res.data)
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
                setError(err.response.data.message);
            });
    }, [id]);

  if(isLoading) return (
    <main className='dashboard_main' style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
        <HashLoader color='#f50057' size={50}/>
    </main>
  )

  if(user) return (
    <main className='dashboard_main' style={{display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
        <DashboardContent auth={user}/>
    </main>
  )
}
