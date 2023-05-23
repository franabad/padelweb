import Link from 'next/link'
import { authOptions } from '../../pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'
import LoginButton from '../client/loginButton'
// import Profile from '../client/profile'
import { type ReactNode } from 'react'
import Profile from '../client/profileDropdown'

const Auth = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(authOptions)

  return (
    <div className="flex">
      {session?.user != null ? (
        <Profile />
      ) : (
        <>
          <LoginButton />
          <Link
            id="register"
            className="bg-transparent text-white hover:bg-slate-950/100 font-bold py-2 px-3 ring-1 ring-inset ring-gray-300/50 hover:ring-white rounded-lg"
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
