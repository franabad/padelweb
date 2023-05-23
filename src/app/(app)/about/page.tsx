// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../../pages/api/auth/[...nextauth]'

const Page = async () => {
  // const session = await getServerSession(authOptions)

  // console.log('Session en about page', session)
  return (
    <div className="text-white pt-[70px]">Somos los mejores</div>
  )
}

export default Page
