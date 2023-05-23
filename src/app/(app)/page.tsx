// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../pages/api/auth/[...nextauth]'

const Page = () => {
  // const session = await getServerSession(authOptions)

  return (
    <main className="justify-center items-center flex pt-[70px]">
      <h1 className="text-white text-6xl animate-fade-up animate-once animate-duration-1000 animate-delay-300 animate-ease-in-out">Esports Center</h1>
    </main>
  )
}

export default Page
