'use client'

import '../../app/globals.css'
import Input from './input'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

interface FormData {
  email: string
  password: string
}

interface UserData {
  name: string
  email: string
  lastname: string
  password: string
}

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  ? process.env.NEXT_PUBLIC_API_BASE_URL
  : 'localhost:3001'

const ProfileForm = () => {
  const router = useRouter()
  const session = useSession()
  const form = useForm<FormData>()

  const [data, setData] = useState<UserData | null >(null)

  useEffect(() => {
    async function enviarSesionALaAPI() {
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({ email: session.data?.user?.email }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      console.log('Esto es la session: ', session)
      if (session.status === 'loading') {
        console.log('Se mete al if de loading')
      } else if (session.status === 'authenticated') {
        console.log('Se mete al if de authenticated')
        const response = await fetch(`http://${apiBaseUrl}/profile`, requestOptions)
        const data = await response.json()

        console.log('Esto es la data: ', data)
        setData(data)
      } else {
        console.log('Se mete al else')
        router.push('/')
      }
    }
    if (session !== null) {
      void enviarSesionALaAPI()
    } else {
      console.log('No hay sesion')
      router.push('/')
    }
  }, [session])

  // const onSubmit = async (data: FormData) => {
  //   const res = await fetch(`http://${apiBaseUrl}/register`, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     credentials: 'include'
  //   })
  //   await res.json()
  //     .then(() => {
  //       // if (res.status === 200) { router.push('/') } else if (res.status === 502) { setEmailExists(true) }
  //     })
  //     .catch((err) => {
  //       console.log('Se mete al catch')
  //       console.log(err)
  //     })
  // }

  return (
    <main className="flex min-h-screen w-full justify-center">
      <FormProvider {...form}>
        <form className='py-[70px] w-1/2 '>
          <div className="space-y-12 bg-slate-900/40 px-20 pt-10">
            <div className="border-b border-white/50 pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">Tu perfil</h2>
              <p className="mt-1 text-sm leading-6 text-white">
                This information will be displayed publicly so be careful what you share.
              </p>
              <div className="mt-10 flex flex-col space-y-7">
                <div className='flex gap-5'>
                  <div className="w-2/6">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                      Nombre
                    </label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        name="name"
                        id="username"
                        defaultValue={data?.name}
                        autocomplete="nope"
                      />
                    </div>
                  </div>
                  <div className="col-span-4 w-4/6">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                      Apellidos
                    </label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        name="lastname"
                        id="lastname"
                        defaultValue={data?.lastname}
                        autocomplete="nope"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-white">
                    Sobre mi
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="items-center bg-white/5 text-sm border border-gray-600 text-white rounded-lg block w-full p-3 placeholder-gray-400"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white">Escribe un poco sobre ti</p>
                </div>
                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-white">
                    Cover
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    {/* <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                    <button
                      type="button"
                      className="rounded-md bg-sky-950 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset hover:bg-sky-950/50"
                    >
                      Cambiar
                    </button>
                  </div>
                </div>
                <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-white">
                    Foto
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white px-6 py-10">
                    <div className="text-center">
                      {/* <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" /> */}
                      <div className="mt-4 flex text-sm leading-6 flex-col">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer py-1 px-4 rounded-md bg-sky-950 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:bg-sky-950/50"
                        >
                          <span>Upload</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1 text-white mt-2">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-white">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">Información Personal</h2>
              <div className="mt-10 flex flex-col space-y-5">
                <div className='flex gap-5'>
                  <div className="w-2/6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                      Email
                    </label>
                    <div className="mt-2">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        autocomplete="nope"
                        defaultValue={data?.email}
                      />
                    </div>
                  </div>
                  <div className="w-4/6">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                      Password
                    </label>
                    <div className="mt-2">
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        autocomplete="nope"
                        defaultValue={data?.password}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                    Nivel de tenis
                  </label>
                  <div className="mt-2">
                    <select
                      id="tenis_level"
                      name="tenis_level"
                      className="block w-1/4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset bg-slate-900"
                    >
                      <option>1</option>
                      <option>1.25</option>
                      <option>1.5</option>
                      <option>1.75</option>
                      <option>2.0</option>
                      <option>2.25</option>
                      <option>2.50</option>
                      <option>2.75</option>
                      <option>2</option>
                      <option>2.25</option>
                      <option>2.5</option>
                      <option>2.75</option>
                      <option>3.0</option>
                      <option>3.25</option>
                      <option>3.50</option>
                      <option>3.75</option>
                      <option>4</option>
                      <option>4.25</option>
                      <option>4.5</option>
                      <option>4.75</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3 w-1/4">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                    Nivel de padel
                  </label>
                  <div className="mt-2">
                    <select
                      id="padel_level"
                      name="padel_level"
                      autoComplete="nope"
                      className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset bg-slate-900"
                    >
                      <option>1</option>
                      <option>1.25</option>
                      <option>1.5</option>
                      <option>1.75</option>
                      <option>2.0</option>
                      <option>2.25</option>
                      <option>2.50</option>
                      <option>2.75</option>
                      <option>2</option>
                      <option>2.25</option>
                      <option>2.5</option>
                      <option>2.75</option>
                      <option>3.0</option>
                      <option>3.25</option>
                      <option>3.50</option>
                      <option>3.75</option>
                      <option>4</option>
                      <option>4.25</option>
                      <option>4.5</option>
                      <option>4.75</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-white">Notifications</h2>
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-white">By Email</legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-white focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6 ">
                        <label htmlFor="comments" className="font-medium text-white">
                          Recibir avisos de partidas
                        </label>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-white focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="candidates" className="font-medium text-white">
                          Candidates
                        </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="mt-6 flex h-[100px] justify-end items-center gap-x-6 border-t-2 border-white/20">
            <button type="button" className="font-semibold leading-6 text-white text-base h-1/2">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md text-base h-1/2 bg-sky-950 px-7 py-2 font-semibold text-white shadow-sm hover:bg-sky-950/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </form>
      </FormProvider>
    </main>
  )
}

export default ProfileForm
