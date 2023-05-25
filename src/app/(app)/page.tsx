// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../pages/api/auth/[...nextauth]'

import Hero from '@/components/server/hero'
const Page = () => {
  // const session = await getServerSession(authOptions)

  return (
    <Hero />
  )
}

export default Page
