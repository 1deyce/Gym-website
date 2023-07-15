import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/UI/Footer';

const Layout = () => {
  return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;