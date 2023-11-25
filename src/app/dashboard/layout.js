import React from 'react';
export const metadata = {
    title: 'Dashboard | Bala Next App',
    description: 'Bala Next App',
  }

const DashboardLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default DashboardLayout;