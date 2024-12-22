import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'

export const metadata: Metadata = {
  title: 'HomeAway',
  description: 'Feel at home, away from home.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='container py-10'>{children}</main>
      </body>
    </html>
  )
}
