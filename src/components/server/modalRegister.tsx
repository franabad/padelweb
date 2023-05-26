import Link from 'next/link'
import React from 'react'

interface ModalRegisterProps {
  open?: any
  children?: any
  onClose?: any
}

const ModalRegister = ({ open }: ModalRegisterProps) => {
  if (!open) return null
  return (
    <div className="overlay bg-black/50 fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div className="modalcontainer rounded-xl bg-slate-950 py-20 px-32 shadow-[0px_0px_10px_10px_#000000] z-50 relative">
        <h1 className="text-green-600 font-semibold text-xl mb-16">Cuenta creada correctamente</h1>
        <Link href="/" className='bg-sky-600/50 rounded-md py-3 px-8 text-white ml-28 hover:bg-sky-600/30 z-50'>OK</Link>
      </div>
    </div>
  )
}

export default ModalRegister
