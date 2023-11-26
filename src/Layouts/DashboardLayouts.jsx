import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

const DashboardLayouts = () => {
  return (
    <div className=' grid grid-cols-12'>
      <div className=' col-span-3'>
        <Sidebar />
      </div>
      <div className=' col-span-9'>
        <Outlet />
      </div>

    </div>
  );
};

export default DashboardLayouts;