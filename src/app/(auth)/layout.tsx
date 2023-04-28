'use client'

import React from 'react'
import '../globals.css'
import { SessionProvider } from 'next-auth/react'

export const metadata = {
  title: 'Login',
  description: 'Nari17 TFG'
}

export default function RootLayout ({
  children, session
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <html>
      <body className="w-screen h-screen bg-[url('../../public/assets/fondo.jpg')] bg-cover bg-no-repeat bg-center py-4 shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[10px] border-x-indigo-950/50">
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}
