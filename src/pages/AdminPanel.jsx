import React from 'react';
import {motion } from 'framer-motion';
import DashboardNav from '../components/dashboard/DashboardNav';
import AdminPanelContent from '../components/admin-panel/AdminPanelContent';
import { useSelector } from 'react-redux';

const AdminPanel = () => {
    const auth = useSelector(state => state.auth)

    return (
        <motion.main style={{display: 'flex', height: '100vh'}}>
            <DashboardNav auth={auth}/>
            <AdminPanelContent />
        </motion.main>
    );
}

export default AdminPanel;
