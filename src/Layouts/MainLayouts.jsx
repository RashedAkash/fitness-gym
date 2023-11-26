import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

const MainLayouts = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      document.title= 'Fitness | Home'
    } else {
      document.title = `Fitness ${location.pathname.replace('/',(' | '))}`
    }
  },[location.pathname])
  return (
    <div className=' overflow-hidden'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;