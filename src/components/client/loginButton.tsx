'use client'

import { signIn } from 'next-auth/react'

const LoginButton = () => {
  return (
    <button
      id="login"
      className="bg-transparent hover:text-gray-300 text-white font-bold py-2 px-4 rounded-lg mr-2"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={async () => await signIn()}
    >
      Sign in
    </button>
  )
}

export default LoginButton
