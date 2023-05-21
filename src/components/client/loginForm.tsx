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

const ErrorMessages = {
  CredentialsSignin:
    'Email o contraseña incorrectos. Por favor, inténtalo de nuevo.'
}

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
        className="w-1/2 mt-7 text-white text-center text-lg bg-sky-800 hover:bg-sky-900 py-4 rounded-3xl"
      >
        {children}
      </button>
    )
  }

  return (
    <div className="bg-slate-950 flex items-center h-full justify-end">
      <header className="min-h-screen w-1/2 justify-start items-start flex">
        <div className="mt-64 ml-44">
          <h1 className="text-8xl flex flex-col font-semibold tracking-tigh text-white">
            E-sports <span className="text-yellow-600">Center</span>
          </h1>
          <h2 className="mt-2 text-3xl text-white flex flex-col">
            El sitio en el que puedes hacer lo que quieras,{' '}
            <span className="text-red-600">cuando quieras</span>
          </h2>
        </div>
      </header>
      <main className="bg-slate-950 flex flex-col items-center justify-center min-h-screen w-1/2">
        <h1 className="text-4xl font-bold mb-10 tracking-tigh text-white">
          Log In
        </h1>

        <FormProvider {...form}>
          <form
            className="space-y-6 w-1/2"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="elber@galarga.com"
              validations={{
                required: true,
                pattern: /\S+@\S+\.\S+/
              }}
              errorMessage="Este campo es obligatorio"
            />

            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Password"
              validations={{ required: true }}
              errorMessage="Este campo es obligatorio"
            />
            {error?.length > 0 && (
              <>
                <span className="text-red-600">{ErrorMessages[error]}</span>
              </>
            )}
            <div className="items-end justify-end flex">
              <Link
                href="/register"
                className="text-white hover:text-gray-400 underline cursor-pointers"
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Don't you have an account? Register
              </Link>
              <Button>Log in</Button>
            </div>
          </form>
        </FormProvider>
      </main>
    </div>
  )
}

export default LoginForm
