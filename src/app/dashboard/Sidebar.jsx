import Link from 'next/link';
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
        <aside className='flex justify-center items-center'>
            <h1>Next hero</h1>
            <ul className='flex justify-center items-center mr-3'>
                {
                    navLink.map(({path, title})=>(
                        <li key={path}>
                            <Link href={path}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};

export default DashboardBar;