import React from 'react';
import { useSelector } from 'react-redux';
import CreateCategoryForm from '../../components/admin-panel/create-category/CreateCategoryForm';
import DashboardNav from '../../components/dashboard/DashboardNav';

const CreateCategory = () => {
    const auth = useSelector(state => state.auth)

    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear categoría</h1>

                <CreateCategoryForm />
            </div>
        </main>
    );
}

export default CreateCategory;
