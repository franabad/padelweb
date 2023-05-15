import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

const Auth = () => {
  const { data: session } = useSession()

  return (
    <div className="flex">
      {session?.user != null ? (
        <p>Mi perfil</p>
      ) : (
        <>
          <button
            id="login"
            className="bg-transparent hover:text-gray-300 text-white font-bold py-2 px-4 rounded-lg mr-5"
            // href="/login"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
            onClick={() => signIn()}
          >
            Sign in
          </button>
          <Link
            id="register"
            className="bg-transparent text-white hover:text-gray-300 hover:bg-slate-950/100 font-bold py-2 px-4 border border-white rounded-lg"
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
