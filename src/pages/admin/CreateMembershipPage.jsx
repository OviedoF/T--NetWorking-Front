import React from 'react';
import { useSelector } from 'react-redux';
import DashboardNav from '../../components/dashboard/DashboardNav';
import CreateMembership from '../../components/admin-panel/create-membership/CreateMembership';

const CreateMembershipPage = () => {
    const auth = useSelector(state => state.auth)

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', paddingTop: 20, alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear categoría</h1>

                <CreateMembership />
            </div>
        </main>
    );
}

export default CreateMembershipPage;
