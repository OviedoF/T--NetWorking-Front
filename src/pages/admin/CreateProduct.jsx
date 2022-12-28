import React from 'react';
import { useSelector } from 'react-redux';
import CreateProductSection from '../../components/admin-panel/create-product/CreateProductSection';
import DashboardNav from '../../components/dashboard/DashboardNav';

const CreateProduct = () => {
    const auth = useSelector(state => state.auth)
    
    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav auth={auth}/>

            <section style={{width: '80%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            paddingTop: 40}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear producto</h1>

                <CreateProductSection />
            </section>
        </main>
    );
}

export default CreateProduct;
