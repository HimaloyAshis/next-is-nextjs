import Link from 'next/link';
import React from 'react';
export const metadata = {
    title: 'Dashboard | Bala Next App',
    description: 'Bala Next App',
  }

const DashboardLayout = ({children}) => {
    return (
        <div className='flex justify-center items-center gap-4'>
            <nav className='text-5xl text-purple-600'>Sidebar</nav>
            <Link href={"/"}>Home</Link>
            {children}
        </div>
    );
};

export default DashboardLayout;