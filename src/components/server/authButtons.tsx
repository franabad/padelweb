import Link from 'next/link'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import LoginButton from '../client/loginButton'

const Auth = async () => {
  const session = await getServerSession(authOptions)

  console.log('Sessión en authButtons', session)

  return (
    <div className="flex">
      {session?.user != null ? (
        <p className="text-white">Mi perfil</p>
      ) : (
        <>
          <LoginButton />
          <Link
            id="register"
            className="bg-transparent text-white hover:text-gray-300 hover:bg-slate-950/100 font-bold py-2 px-3 border border-white rounded-lg"
            href="/register"
          >
            Sign up
          </Link>
        </>
      )}
    </div>
  )
}

export default Auth
