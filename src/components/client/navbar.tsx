'use client'
import Link from 'next/link'
import Auth from './authButtons'
import Services from './services'

const NavBar = () => {
  return (
    <nav className="bg-gray-900/90 shadow-[0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-blur-[10px] top-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className='hidden w-full md:block md:w-auto'>
          <ul className="flex space-x-10 bg-transparent font-medium p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
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
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Auth />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
