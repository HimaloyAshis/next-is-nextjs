import Navbar from '@/compenents/Navbar';
import Link from 'next/link';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>Foot</footer>
        </div>
    );
};

export default WithLayout;