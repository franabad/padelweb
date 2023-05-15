import NavBar from '@/components/client/navbar'
import '../globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='relative overflow-hidden min-h-screen'>
        <NavBar />
        <div className="relative pt-16">
          <div className="absolute inset-0 bg-slate-950/95 w-screen h-screen"></div>
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </>
  )
}
