import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '../../components/Nav'



export const metadata = {
  title: 'Proptopia',
  description: 'Discover and Share Promts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}
