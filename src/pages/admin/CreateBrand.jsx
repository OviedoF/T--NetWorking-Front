import React from 'react';
import { useSelector } from 'react-redux';
import CreateBrandForm from '../../components/admin-panel/brands/CreateBrandForm';
import DashboardNav from '../../components/dashboard/DashboardNav';

const CreateBrand = () => {
    const auth = useSelector(state => state.auth);

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear imágen de "Marcas"</h1>

                <CreateBrandForm />
            </div>
        </main>
    );
}

export default CreateBrand;
