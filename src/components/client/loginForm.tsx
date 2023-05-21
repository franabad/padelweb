'use client'

import '../../app/globals.css'
import { useSession, signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data: any) => {
    console.log('api dentro de onsubmit', process.env.NEXTAUTH_URL)
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/'
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session } = useSession()

  return (
    <section className="bg-slate-950/95">
      <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <div className="w-full bg-slate-950/95 rounded-full md:mt-0 sm:max-w-md xl:p-0">
          <div className="bg-slate-950/95 p-6 space-y-4 ">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign into your account
            </h1>
            <form
              className="space-y-4 bg-transparent"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col">
                <div className="flex flex-col mb-3">
                  <label htmlFor="email" className="text-white mb-3">
                    Email
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="text"
                    id="email"
                    placeholder='example@email.com'
                    {...register('email', {
                      required: 'required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format'
                      }
                    })}
                  />
                  {errors.email != null && (
                    <span className="text-xs text-red-600 text-center">
                      Invalid email
                    </span>
                  )}
                </div>
                <div className="flex flex-col mb-3">
                  <label htmlFor="password" className="text-white mb-3">
                    Password
                  </label>
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    id="password"
                    {...register('password', {
                      required: 'required'
                    })}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 w-full text-white bg-indigo-800 hover:bg-indigo-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoginForm
