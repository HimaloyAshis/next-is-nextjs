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
        
        {children}
        <footer>
          <p>This is footer</p>
        </footer>
      </body>

    </html>
  )
}

export default RootLayout