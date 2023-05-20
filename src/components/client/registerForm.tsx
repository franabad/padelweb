'use client'

import '../../app/globals.css'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// import { useState } from 'react'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL != null ? process.env.NEXT_PUBLIC_API_BASE_URL : 'localhost:3001'

const RegisterForm = () => {
  const router = useRouter()
  const {
    register,
    // handleSubmit,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors }
  } = useForm()

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const { email, name, lastname, password } = Object.fromEntries(formData.entries())
    const data = { email, name, lastname, password }

    // const validate = (email: any, name: any, password: any) => {
    //   if (email == null || name == null || password == null) {
    //     return (
    //       <span className="text-red-600 text-base">
    //       This field is required
    //     </span>
    //     )
    //   }
    // }

    // const errorMessage = validate(email, name, password)

    fetch(`http://${apiBaseUrl}/register`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(async (res) => await res.json())
      .then(() => {
        console.log(session)
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const { data: session } = useSession()

  const Input = (
    { id, name, label, type, placeholder, errorMessage, ...props }:
    { id: string, name: string, label: string, type: string, placeholder: string, errorMessage: string, props: any }
  ) => {
    return (
      <fieldset>
        <label className='text-white block mb-3 mt-2 text-lg' htmlFor={id}>{label}</label>
        <input
          className='items-center bg-white/5 text-sm border border-gray-600 text-white rounded-lg block w-full p-3 placeholder-gray-400'
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
          {...props}
        />
        <span className='text-red-700'>{errorMessage}</span>
      </fieldset>
    )
  }

  const Button = ({ children }: { children: React.ReactNode }) => {
    return (
      <button
        type="submit"
        className="w-1/2 mt-7 text-white text-center text-lg bg-sky-800 hover:bg-sky-900 py-4 rounded-3xl"
      >
      {children}
      </button>
    )
  }

  return (
    <div className="bg-slate-950 flex items-center h-full justify-end">
      <header className='min-h-screen w-1/2 justify-start items-start flex'>
        <div className='mt-64 ml-44'>
          <h1 className="text-8xl flex flex-col font-semibold tracking-tigh text-white">
            E-sports <span className='text-yellow-600'>Center</span>
          </h1>
          <h2 className='mt-2 text-3xl text-white flex flex-col'>
            El sitio en el que puedes hacer lo que quieras, <span className='text-red-600'>cuando quieras</span>
          </h2>
        </div>
      </header>
      <main className="bg-slate-950 flex flex-col items-center justify-center min-h-screen w-1/2">
        <h1 className="text-4xl font-bold mb-10 tracking-tigh text-white">
          Create your account
        </h1>
        <form
          className="space-y-6 w-1/2"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={onSubmit}
        >
          <Input
            id = 'name'
            name = 'name'
            label = 'Nombre'
            type = 'text'
            placeholder = 'John'
            props = {{ ...register('name', { required: 'required' }) }}
            errorMessage='This field is required'
          />
          <Input
            id = 'lastname'
            name = 'lastname'
            label = 'Lastname'
            type = 'text'
            placeholder = 'Doe'
            props = {{ ...register('lastname') }}
            errorMessage=''
          />
          <Input
            id = 'email'
            name = 'email'
            label = 'Email'
            type = 'text'
            placeholder = 'example@email.com'
            props = {{ ...register('email', { required: 'required' }) }}
            errorMessage='This field is required'
          />
          {/* {errors.id != null && (
            <span className="text-red-600 text-base">
              This field is required
            </span>
          )} */}
          <Input
            id = 'password'
            name = 'password'
            label = 'Password'
            type = 'password'
            placeholder = ''
            props = {{ ...register('password', { required: 'required' }) }}
            errorMessage='This field is required'
          />
          {/* {errors.id != null && (
            <span className="text-red-600 text-base">
              This field is required
            </span>
          )} */}
          {/* <div className="items-center flex flex-row [&>div]:m-4 [&>div>input]:mt-3 ">
            <div className="">
              <label htmlFor="text" className="text-white">
                Nombre
              </label>
              <input
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                id="name"
                placeholder='John'
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
            </div> */}
            {/* <button
              type="submit"
              className="mt-10 w-1/2 text-white bg-sky-800 hover:bg-sky-900 py-5 rounded-lg"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
            >
              Sign up
            </button> */}
            <div className='items-end justify-end flex'>
              <Link href='/login' className='text-white hover:text-gray-400 underline cursor-pointer mr-5'>Have already an account? Log in</Link>
              <Button>Sign up</Button>
            </div>
          </form>
        {/* </div> */}
      </main>
    </div>
  )
}

export default RegisterForm
