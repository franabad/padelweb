import { getServerSession } from 'next-auth'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'

import ProfileForm from '@/components/client/profileForm'

const Page = async () => {
  const session = await getServerSession(authOptions)

  console.log('Email de la sesion', session?.user?.email)

  return (
    <ProfileForm />
  )
}

export default Page
