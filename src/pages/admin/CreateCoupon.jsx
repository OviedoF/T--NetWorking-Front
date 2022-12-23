import React from 'react';
import DashboardNav from '../../components/dashboard/DashboardNav';
import CreateCouponForm from '../../components/admin-panel/create-coupon/CreateCouponForm';

const CreateCoupon = () => {
    return (
        <main style={{minHeight: '120vh', display: 'flex'}}>
            <DashboardNav />

            <div className="container" style={{width: '100%', minHeight: '100%', display: 'flex',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{marginBottom: '30px', fontSize: '20px'}}>Crear cupón de descuento</h1>

                <CreateCouponForm />
            </div>
        </main>
    );
}

export default CreateCoupon;
