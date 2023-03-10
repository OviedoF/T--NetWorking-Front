import React from 'react';
import CreateNewsForm from '../../components/admin-panel/create-news/CreateNewsForm';
import DashboardNav from '../../components/dashboard/DashboardNav'

const CreateNews = () => {
    return (
        <main style={{minHeight: '120vh', display: 'flex'}}>
            <DashboardNav />

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear noticia</h1>

                <CreateNewsForm />
            </div>
        </main>
    );
}

export default CreateNews;
