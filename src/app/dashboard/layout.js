import Link from 'next/link';
import React from 'react';
import DashboardBar from './Sidebar';
export const metadata = {
    title: 'Dashboard | Bala Next App',
    description: 'Bala Next App',
  }

const DashboardLayout = ({children}) => {
    return (
        <div className='flex justify-center items-center gap-4'>
            <DashboardBar></DashboardBar>
            {children}
        </div>
    );
};

export default DashboardLayout;