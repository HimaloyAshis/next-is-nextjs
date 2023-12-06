import Link from 'next/link';
import React from 'react';
import DashboardBar from './Sidebar';
export const metadata = {
    title: 'Dashboard | Bala Next App',
    description: 'Bala Next App',
  }

const DashboardLayout = ({children}) => {
    return (
        <div className='items-center container mx-auto gap-4'>
            <p className='text-3xl font-semibold'>Dashboard</p>
            <DashboardBar></DashboardBar>
            {children}
        </div>
    );
};

export default DashboardLayout;