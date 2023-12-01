"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'Bala Next App',
  description: 'Bala Next App',
}

const RootLayout = ({ children }) => {

  console.log("From  RootLayout");

  return (
    <html lang="en">

      <body className={inter.className}>
        <nav className='flex  gap-3 text-xl text-purple-400'>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* <a href="about">About</a> */}
          <a href="Detail">Detail</a>
          <a href="product">Product</a>
        </nav>
        {children}
        <footer>
          <p>This is footer</p>
        </footer>
      </body>

    </html>
  )
}

export default RootLayout