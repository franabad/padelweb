import Auth from '@/components/server/authButtons'
import NavBar from '@/components/client/navbar'
import '../globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

export default async function RootLayout({

  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  console.log(session)

  return (
    <>
      <div className="relative overflow-hidden min-h-screen">
        <NavBar>
          <Auth />
        </NavBar>
        <div className="relative pt-16">
          <div className="absolute inset-0 bg-slate-950/95 w-screen h-screen"></div>
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </>
  )
}
