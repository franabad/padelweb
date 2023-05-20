'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import '../../app/globals.css'
import Input from './input'

interface FormData {
  name: string
  lastname?: string
  email: string
  password: string
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/strict-boolean-expressions
const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  ? process.env.NEXT_PUBLIC_API_BASE_URL
  : 'localhost:3001'

const RegisterForm = () => {
  const router = useRouter()
  const form = useForm<FormData>()

  const onSubmit = (data: FormData) => {
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
        router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
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
          Create your account
        </h1>

        <FormProvider {...form}>
          <form
            className="space-y-6 w-1/2"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <Input
              name="name"
              label="Nombre"
              type="text"
              placeholder="Elber"
              validations={{ required: true }}
              errorMessage="Este campo es obligatorio"
            />

            <Input
              name="lastname"
              label="Apellido"
              type="text"
              placeholder="Galarga"
            />

            <Input
              name="email"
              label="Email"
              type="text"
              placeholder="elber@galarga.com"
              validations={{ required: true }}
              errorMessage="Este campo es obligatorio"
            />

            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="password"
              validations={{ required: true }}
              errorMessage="Este campo es obligatorio"
            />
            <div className="items-end justify-end flex">
              <Link
                href="/login"
                className="text-white hover:text-gray-400 underline cursor-pointer mr-5"
              >
                Have already an account? Log in
              </Link>
              <Button>Sign up</Button>
            </div>
          </form>
        </FormProvider>
      </main>
    </div>
  )
}

export default RegisterForm
