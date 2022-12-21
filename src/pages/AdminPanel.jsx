import React from 'react';
import {motion } from 'framer-motion';
import DashboardNav from '../components/dashboard/DashboardNav';
import AdminPanelContent from '../components/admin-panel/AdminPanelContent';

const AdminPanel = () => {
    return (
        <motion.main style={{display: 'flex', height: '100vh'}}>
            <DashboardNav />
            <AdminPanelContent />
        </motion.main>
    );
}

export default AdminPanel;
