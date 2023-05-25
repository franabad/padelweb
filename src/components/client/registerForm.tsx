'use client'

import Link from 'next/link'
// import { useRouter } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import '../../app/globals.css'
import Input from './input'
import { useState } from 'react'
import ModalRegister from '../server/modalRegister'

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
  // const router = useRouter()
  const form = useForm<FormData>()
  const [emailExists, setEmailExists] = useState<boolean>(false)
  const [showModal, setShowModal] = useState(false)

  const onSubmit = async (data: FormData) => {
    const res = await fetch(`http://${apiBaseUrl}/register`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    await res.json()
      .then(() => {
        if (res.status === 200) { setShowModal(true) } else if (res.status === 502) { setEmailExists(true) }
      })
      .catch((err) => {
        console.log('Se mete al catch')
        console.log(err)
      })
  }

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
    <div className="flex h-full justify-start overflow-hidden">
      <div className='absolute flex'>
        <div className="items-center justify-center flex w-20 h-20 relative">
          <Link href="/" className="text-white rotate-180 focus:outline-none rounded-full p-2.5 text-center inline-flex items-center">
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
          <h2 className="mt-6 text-3xl text-white flex flex-col">
            El sitio en el que puedes hacer
            <span className="text-yellow-600">lo que quieras,</span>
            <span className="text-red-600">cuando quieras</span>
          </h2>
        </div>
      </header>
      <main className="bg-slate-950 flex flex-col items-center justify-center min-h-screen w-1/2">
        <div className='w-[423.58px]'>
          <h1 className="text-4xl font-bold mb-24 tracking-tigh text-white">
            Create your account
          </h1>
          <FormProvider {...form}>
            <form
              className="space-y-5 w-full flex flex-col h-full"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <Input
                name="name"
                label="Nombre"
                type="text"
                placeholder="Taylor"
                validations={{ required: true }}
                errorMessage="Este campo es obligatorio"
              />

              <Input
                name="lastname"
                label="Apellido"
                type="text"
                placeholder="Hawkins"
              />

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
              />
              {emailExists && (
                <span className="text-red-600">El email introducido ya existe</span>
              )}
              <Input
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                validations={{ required: true, minLength: 4 }}
                errorMessage="Este campo es obligatorio"
              />
              <div className="items-end justify-between flex">
                <div className="text-white flex flex-col items-start justify-start">
                  Already have an account?
                  <Link href= "/login" className="text-white hover:text-gray-400 underline cursor-pointer">Sign in</Link>
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </FormProvider>
          {showModal && (
            <ModalRegister open={showModal} />
          )}
        </div>
      </main>
    </div>
  )
}

export default RegisterForm
