// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../../pages/api/auth/[...nextauth]'

const Page = async () => {
  // const session = await getServerSession(authOptions)

  // console.log('Session en about page', session)
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <p className="text-red-800 pt-[70px] text-4xl">Work in progress</p>
    </div>
  )
}

export default Page
