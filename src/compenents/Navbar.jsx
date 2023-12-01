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
        path: '/home',
        title: 'Home'
    },
]

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between container mx-auto max-w-screen-xl bg-slate-500'>
            <h1 className='font-semibold text-red-700 text-3xl'>Next Hero</h1>
            <ul className='flex items-center justify-center gap-3 '>
                {
                    navLink.map(({ path, title }) =>
                    (<li className='mx-2' key={path}>
                        <Link href={path}>{title}</Link>
                    </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;