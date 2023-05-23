'use client'

import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Profile = () => {
  // const [showServices, setShowServices] = useState<boolean>(false)
  const { data: session } = useSession()

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-[4px] bg-transparent px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300/20 hover:ring-white">
        {session?.user?.name}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-700 rounded-md bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Mi perfil
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Amigos
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Mis reservas
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Suscripciones
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Ayuda
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Configuración
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-[0.10px]">
            <Menu.Item>
            {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-red-900/50 text-white' : 'text-white',
                      'block w-full px-4 py-2 text-left text-sm'
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    )} onClick={async() => await signOut()}
                  >
                    Sign out
                  </button>
            )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Profile
