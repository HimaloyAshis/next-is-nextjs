"use client"
import React from 'react';

const Template = ({children}) => {
    console.log('from Template');
    return (
        <div>
            <p>Template</p>
            {children}
        </div>
    );
};

export default Template;