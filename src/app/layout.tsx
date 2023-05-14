'use client'

import './globals.css'
import { Montserrat } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <html className={montserrat.className}>
      <body className="w-screen h-screen bg-[url('../../public/assets/fondo.jpg')] bg-cover bg-no-repeat bg-center shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)]">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
