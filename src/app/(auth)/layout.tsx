import React from 'react'
import '../globals.css'

export const metadata = {
  title: 'Login',
  description: 'Nari17 TFG'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="w-screen h-screen bg-[url('../../public/assets/fondo.jpg')] bg-cover bg-no-repeat bg-center py-4">
        {children}
      </body>
    </html>
  )
}
