import React from 'react'
import { useSelector } from 'react-redux'
import DashboardContent from '../components/dashboard/DashboardContent';
import DashboardNav from '../components/dashboard/DashboardNav';
import './DashboardPage.scss'

export default function Dashboard() {
    const auth = useSelector(state => state.auth)
    console.log(auth);
  return (
    <main className='dashboard_main' style={{display: 'flex', height: '100vh'}}>
        <DashboardNav auth={auth}/>
        <DashboardContent auth={auth}/>
    </main>
  )
}
