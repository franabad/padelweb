'use client'

import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import '../../app/globals.css'
import Input from './input'

interface FormData {
  email: string
  password: string
}

// const ErrorMessages = {
//   CredentialsSignin:
//     'Email o contraseña incorrectos. Por favor, inténtalo de nuevo.'
// }

const LoginForm = () => {
  const form = useForm<FormData>()
  const searchParams = useSearchParams()
  const error: string | null | undefined = searchParams?.get('error')

  const onSubmit = async (data: FormData) => {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/'
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session } = useSession()

  const Button = ({ children }: { children: React.ReactNode }) => {
    return (
      <button
        type="submit"
        className="py-4 px-10 mt-10 text-white text-center text-lg bg-sky-800/70 hover:bg-sky-900/50 rounded-2xl"
      >
        {children}
      </button>
    )
  }

  return (
    <div className="flex h-full justify-start">
      <div className='absolute flex'>
        <div className="items-center justify-center flex w-20 h-20 relative">
          <Link href="/" className="text-white rotate-180 font-medium rounded-full p-2.5 text-center inline-flex items-center">
            <svg aria-hidden="true" className="w-8 h-8 hover:text-sky-600 hover:scale-125" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Go home</span>
          </Link>
        </div>
      </div>
      <header className="bg-[url('../../public/assets/banner.jpg')] bg-cover bg-no-repeat bg-left-top min-h-screen w-4/6 justify-center items-center flex">
        <div className="z-10">
          <h1 className="text-8xl flex flex-col font-semibold tracking-tigh text-white">
            E-sports <span className="text-yellow-600">Center</span>
          </h1>
          <h2 className="mt-12 text-3xl text-white flex flex-col">
            El sitio en el que puedes hacer lo que quieras,{' '}
            <span className="text-yellow-600">cuando quieras</span>
          </h2>
        </div>
      </header>
      <main className="bg-slate-950 flex flex-col items-center justify-center min-h-screen w-1/2">
        <div>
          <h1 className="text-4xl font-bold mb-24 tracking-tigh text-white">
            Log in to your account
          </h1>
          <FormProvider {...form}>
            <form
              className="space-y-3 w-full flex flex-col h-full"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Input
                name="email"
                label="Email"
                type="text"
                placeholder="example@domain.com"
                validations={{
                  required: true,
                  pattern: /\S+@\S+\.\S+/
                }}
                errorMessage="Este campo es obligatorio"
                showRequired={false}
              />

              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                validations={{ required: true }}
                errorMessage="Este campo es obligatorio"
                showRequired={false}
              />
              {(error?.length ?? 0) > 0 && (
                <>
                  <span className="text-red-600">Email o contraseña incorrectos. Por favor, inténtalo de nuevo.</span>
                </>
              )}
              <div className="items-end justify-between flex">
                <div className="w-1/2 text-white flex flex-col items-start justify-start">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Don't have an account?
                  <Link href= "/register" className="text-white hover:text-gray-400 underline cursor-pointer">Sign in</Link>
                </div>
                <Button>Log In</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>
    </div>
  )
}

export default LoginForm
