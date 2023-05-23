// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../../pages/api/auth/[...nextauth]'

const Page = async () => {
  // const session = await getServerSession(authOptions)

  // console.log('Session en faq', session)
  return (
    <div className="text-white justify-center flex">
      <h1 className="justify-center flex relative">FAQ</h1>
    </div>
  )
}

export default Page
