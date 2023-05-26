'use client'
import Link from 'next/link'
import Services from './services'
import { type ReactNode } from 'react'
import Image from 'next/image'

const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="bg-slate-900 w-full flex h-[70px] justify-between items-center navbar fixed z-50">
      <div className="list-none flex justify-end items-center flex-1">
        <div className='ml-5 flex items-center'>
          <Link href="/">
            <Image alt="logo" src='/assets/logo.webp' width={70} height={70} className="image-link"></Image>
          </Link>
          <p className='text-white font-semibold text-3xl ml-2'>e-Sports Center</p>
        </div>
        <ul className="list-none flex justify-end items-center flex-1">
          <li>
            <Link
              href="/"
              className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-20"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mr-20"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Services />
          </li>
          <li>
            <Link
              href="/prices"
              className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-20"
            >
              Precios
            </Link>
          </li>
          <li className="mr-20 ml-20">{children}</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
