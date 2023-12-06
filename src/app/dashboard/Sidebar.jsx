import Link from 'next/link';
import React from 'react';

const navLink = [
    {
        path:'/dashboard/profile',
        title:"Profile"
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
        <aside className=''>
            <h1>Next hero</h1>
            <ul className=''>
                {
                    navLink.map(({path, title})=>(
                        <li className='my-3' key={path}>
                            <Link href={path}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};

export default DashboardBar;