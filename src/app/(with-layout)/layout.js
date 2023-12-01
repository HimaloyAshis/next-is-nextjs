import Navbar from '@/compenents/Navbar';
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