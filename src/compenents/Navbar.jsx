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
        <nav style={ {display:'flex'} } className='flex items-center justify-between container mx-auto max-w-screen-xl bg-slate-500'>
            <h1 className='font-semibold text-red-700 text-3xl'>Next Hero</h1>
            
        </nav>
    );
};

export default Navbar;