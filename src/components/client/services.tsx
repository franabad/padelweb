'use client'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const Services = () => {
  // const [showServices, setShowServices] = useState<boolean>(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-white hover:text-blue-700">
        Servicios
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
        <Menu.Items className="absolute left-1 right-0 z-10 mt-2 w-32 origin-top-right divide-y divide-gray-700 rounded-md bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/restaurant"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Restaurante
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/padel/matches"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Pádel
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/computers"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Informática
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/tenis"
                  className={classNames(
                    active ? 'bg-sky-900/50 text-white' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Tenis
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default Services
