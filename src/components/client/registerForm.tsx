'use client'

import '../../app/globals.css'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL != null ? process.env.NEXT_PUBLIC_API_BASE_URL : 'localhost:3001'

console.log(apiBaseUrl)

const RegisterForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    fetch(`http://${apiBaseUrl}/register`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(async (res) => await res.json())
      .then((data) => {
        console.log(session)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const { data: session } = useSession()

  return (
    <div className="bg-slate-950/95 flex items-center justify-center h-screen">
      <div className="border bg-transparent w-[600px]">
        <h1 className="text-center text-3xl mb-10 font-bold leading-tight tracking-tight text-white">
          Sign up
        </h1>
        <form
          className="space-y-4 flex items-center justify-left"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="items-center flex flex-row [&>div]:m-4 [&>div>input]:mt-3 ">
            <div className="">
              <label htmlFor="text" className="text-white">
                Nombre
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id="name"
                {...register('name', {
                  required: 'required'
                })}
              />
              {errors.name != null && (
                <span className="text-base text-red-600 text-center mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="text" className="text-white">
                Apellidos
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id="lastname"
                {...register('lastname')}
              />
            </div>
            <div className="">
              <label htmlFor="email" className="text-white mb-3">
                Email
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id="email"
                {...register('email', {
                  required: 'required',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Entered value does not match email format'
                  }
                })}
              />
              {errors.email != null && (
                <span className="text-base text-red-600 text-center mt-2">
                  Invalid email
                </span>
              )}
            </div>
            <div className="">
              <label htmlFor="password" className="text-white mb-3">
                Password
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="password"
                id="password"
                {...register('password', {
                  required: 'required',
                  minLength: 4
                })}
              />
            </div>
            <button
              type="submit"
              className="mt-10 w-full text-white bg-indigo-800 hover:bg-indigo-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
