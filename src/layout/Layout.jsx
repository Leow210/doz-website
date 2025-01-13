import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-neutral-50 text-gray-800">
            <Header />
            <main>{children}</main>
            <Footer />

        </div >
    );
};

export default Layout;