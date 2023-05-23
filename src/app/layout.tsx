'use client'

import './globals.css'
import { Montserrat } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

// import { getServerSession } from 'next-auth'
// import { authOptions } from '../pages/api/auth/[...nextauth]'

// const session = getServerSession(authOptions)

// console.log(session)

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
      <body className='bg-slate-950'>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
