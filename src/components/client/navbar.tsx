'use client'
import Link from 'next/link'
import Services from './services'
import { type ReactNode } from 'react'

const NavBar = ({ children }: { children: ReactNode }) => {
  return (
    <nav className="bg-slate-950 w-full flex py-6 justify-between items-center navbar">
      <div className="list-none flex justify-end items-center flex-1">
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
              href="/faq"
              className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-20"
            >
              Prices
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className="block text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ml-20"
            >
              FAQ
            </Link>
          </li>
          <li className="mr-20 ml-20">{children}</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
