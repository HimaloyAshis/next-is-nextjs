import React from 'react';

const navLink = [
    {
        path:'/dashboard/profile',
        title:"Dashboard"
    },
    {
        path:'/dashboard/addProduct',
        title:"Add product"
    },
    {
        path:'/dashboard/manageProduct',
        title:"Manage product"
    },
    {
        path:'/',
        title:"Home"
    },
]

const DashboardBar = () => {
    return (
        <aside>
            <h1>Dashboard Bar</h1>
        </aside>
    );
};

export default DashboardBar;