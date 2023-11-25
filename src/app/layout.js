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
        <nav>
          <a href="ok">Home</a>
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