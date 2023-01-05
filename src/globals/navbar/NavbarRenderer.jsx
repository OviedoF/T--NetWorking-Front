import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const NavbarRenderer = () => {
    const { pathname } = window.location;
    const isCard = pathname.includes('/card/');

    return (
        <>
            <header>
                {isCard ? null : <Navbar />}
            </header>

            {<Outlet />}
        </>
    );
}

export default NavbarRenderer;
