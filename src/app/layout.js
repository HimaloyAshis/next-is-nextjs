import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bala Next App',
  description: 'Bala Next App',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">

      <body className={inter.className}>
        <nav className='flex  gap-3 text-xl text-purple-400'>
          <a href="home">Home</a>
          <a href="about">About</a>
          <a href="Detail">Details</a>
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