import React from 'react';
import { useSelector } from 'react-redux';
import CreateFAQForm from '../../components/admin-panel/create-faq/CreateFAQForm';
import DashboardNav from '../../components/dashboard/DashboardNav';

const CreateFAQ = () => {
    const auth = useSelector(state => state.auth);

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear FAQ</h1>

                <CreateFAQForm auth={auth}/>
            </div>
        </main>
    );
}

export default CreateFAQ;
