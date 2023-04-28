import React from 'react'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'

const Auth = () => {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className='flex'>
      {((session?.user) != null)
        ? (
        <p>Mi perfil</p>
          )
        : (
      <>
        <button
          id="login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-3xl"
          // href="/login"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
          onClick={() => signIn()}
        >
          Iniciar sesión
        </button>
        <Link
          id="register"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-3xl"
          href="/register"
        >
          Registrarse
        </Link>
      </>
          )}
    </div>
  )
}

export default Auth
