import React from 'react';
import CreateUserForm from '../../components/admin-panel/create-user/CreateUserForm';
import DashboardNav from '../../components/dashboard/DashboardNav';

const CreateModUser = () => {
    return (
        <main style={{minHeight: '100vh', display: 'flex'}}>
            <DashboardNav />

            <section style={{width: '80%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            paddingTop: 40, marginBottom: 50}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear usuario</h1>

                <CreateUserForm />
            </section>
        </main>
    );
}

export default CreateModUser;
