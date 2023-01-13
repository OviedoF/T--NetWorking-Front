import React from 'react';
import { useSelector } from 'react-redux';
import EditInfoForm from '../../../components/admin-panel/biznesInfo/EditInfoForm';
import CreateBrandForm from '../../../components/admin-panel/brands/CreateBrandForm';
import DashboardNav from '../../../components/dashboard/DashboardNav';

const ManageBiznesInfo = () => {
    const auth = useSelector(state => state.auth);

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Modificar información de la página</h1>

                <EditInfoForm auth={auth} />
            </div> 
        </main>
    );
}

export default ManageBiznesInfo;
