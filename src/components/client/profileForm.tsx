/* eslint-disable react/no-unescaped-entities */
'use client'

// import { signIn, useSession } from 'next-auth/react'
// import Link from 'next/link'
// import { useSearchParams } from 'next/navigation'
import { FormProvider, useForm } from 'react-hook-form'
import '../../app/globals.css'
import Input from './input'
// import { useEffect, useState } from 'react'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../pages/api/auth/[...nextauth]'
// import { authOptions } from '../../pages/api/auth/[...nextauth]'
// import { getSession } from 'next-auth/react'
// import Input from './input'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/20/solid'
// import Input from './input'
// import Link from 'next/link'

interface FormData {
  email: string
  password: string
}

// const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
//   ? process.env.NEXT_PUBLIC_API_BASE_URL
//   : 'localhost:3001'

// const session = getSession()

// console.log('Sesion del componente', session)

// const getUserInfo = async () => {
//   const session = await getSession()
//   console.log('Email dentro del componente: ', session)

//   const res = await fetch(`http://${apiBaseUrl}/login`, {
//     method: 'POST',
//     body: JSON.stringify(session?.user?.email),
//     headers: { 'Content-Type': 'application/json' },
//     credentials: 'include'
//   })
//   const data = await res.json()
//   return data
// }

const ProfileForm = () => {
  const form = useForm<FormData>()

  return (
    <main className="flex min-h-screen w-full justify-center">
        <FormProvider {...form}>
          <form className='py-[100px] '>
            <div className="space-y-12">
              <div className="border-b border-white/50 pb-12">
                <h2 className="text-base font-semibold leading-7 text-white">Tu perfil</h2>
                <p className="mt-1 text-sm leading-6 text-white">
                  This information will be displayed publicly so be careful what you share.
                </p>
                <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="col-span-4 w-4/6">
                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-white">
                      Nombre
                    </label>
                    <div className="mt-2">
                      <Input
                        type="text"
                        name="name"
                        id="username"
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        defaultValue="Andrea"
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
                        defaultValue="Tom Cook"
                        autocomplete="nope"
                      />
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
                  <p className="mt-3 text-sm leading-6 text-white">Write a few sentences about yourself.</p>
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

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                    Email
                  </label>
                  <div className="mt-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="nope"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                    Nivel de tenis
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
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
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-white">
                    Nivel de padel
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
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
              <p className="mt-1 text-sm leading-6 text-white">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>

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

          <div className="mt-6 flex items-center justify-end gap-x-6 pt-10 border-t-2 border-white/20">
            <button type="button" className="text-sm font-semibold leading-6 text-white">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-sky-950 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-950/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
