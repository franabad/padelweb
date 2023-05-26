// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../../pages/api/auth/[...nextauth]'

const Page = async () => {
  // const session = await getServerSession(authOptions)

  // console.log('Session en about page', session)
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <p className="text-white mb-5">Regístrate en la web y con esas mismas credenciales, podrás acercarte al centro y disfrutar del área de ordenadores, con las últimas actualizaciones del mercado y los últimos videojuegos instalados.</p>
      <p className="text-white">Gratis por tiempo limitado.</p>
      <p className="text-red-800 pt-[70px] text-4xl">Work in progress</p>
    </div>
  )
}

export default Page
