import Link from 'next/link';
import React from 'react';

const navLink = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/profile',
        title: 'Profile'
    },
    {
        path: '/addProduct',
        title: 'AddProduct'
    },
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/',
        title: 'Home'
    },
]

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center'>
            <h1 className='font-semibold text-3xl'>Next Hero</h1>
            <ul className='flex items-center justify-center gap-3'>
                {
                    navLink.map(({ path, title }) =>
                    <li key={path}>
                        <Link href={path}>{title}</Link>
                    </li> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;