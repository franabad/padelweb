import Auth from '@/components/server/authButtons'
import NavBar from '@/components/client/navbar'
import '../globals.css'

export default async function RootLayout({

  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar>
        {/* @ts-expect-error Para pasar la build */}
        <Auth />
      </NavBar>
      {children}
    </>
  )
}
