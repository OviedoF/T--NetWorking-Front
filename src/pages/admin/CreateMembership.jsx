import React from 'react'
import { useSelector } from 'react-redux'

export default function CreateMembership() {
    const auth = useSelector(state => state.auth);

  return (
    <main className='dashboard_main' style={{display: 'flex', height: '100vh'}}>
        <DashboardNav auth={auth}/>

        
    </main>
  )
}
