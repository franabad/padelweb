import React, { useEffect, useRef } from 'react'

interface ModalMatchesProps {
  open?: boolean
  onClose?: () => void
  matchData?: {
    id?: number
    p1?: string
    p2?: string
    p3?: string
    p4?: string
  }
}

const ModalMatches = ({ open, onClose, matchData }: ModalMatchesProps) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleOKClick = () => {
    onClose?.()
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose?.()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [onClose])

  if (!open) return null

  return (
    <div className='overlay bg-black/50 fixed w-full h-full top-0 left-0 flex items-center justify-center'>
      <div ref={modalRef} className='modalcontainer rounded-xl bg-slate-950 py-20 px-32 shadow-[0px_0px_10px_10px_#000000]'>
        <h1 className='text-green-600 font-semibold text-xl mb-16'>Partida {matchData?.id}</h1>
        <p className='text-white'>Jugador 1: {matchData?.p1}</p>
        <p className='text-white'>Jugador 2: {matchData?.p2}</p>
        <p className='text-white'>Jugador 3: {matchData?.p3}</p>
        <p className='text-white'>Jugador 4: {matchData?.p4}</p>
        <button onClick={handleOKClick} className='bg-sky-600/50 rounded-md py-3 px-8 text-white ml-28 hover:bg-sky-950'>OK</button>
      </div>
    </div>
  )
}

export default ModalMatches
