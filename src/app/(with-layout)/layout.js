import Link from 'next/link';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <nav className='flex  gap-3 text-xl text-purple-400'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* <a href="about">About</a> */}
          <a href="Detail">Detail</a>
          <a href="product">Product</a>
        </nav>
            <p>WithLayout</p>
            {children}
            <footer>Foot</footer>
        </div>
    );
};

export default WithLayout;