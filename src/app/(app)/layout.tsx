import NavBar from '@/components/client/navbar'
import '../globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
