/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
'use client'
// import Link from 'next/link'
import { useState } from 'react'
import ModalMatches from '../server/modalMatches'
// import { v4 as uuidv4 } from 'uuid'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  ? process.env.NEXT_PUBLIC_API_BASE_URL
  : 'localhost:3001'
interface TableCellProps {
  cellId: number
  texto: string
  onMatchSelected: (match: MatchData) => void
  rowIndex: number
}

interface MatchData {
  id: number
  jugador1: string
  jugador2: string
  fecha: string
  hora: string
  lugar: string
}

const TableCells = ({ cellId, rowIndex, texto, onMatchSelected }: TableCellProps) => {
  const cellUniqueId = `${cellId}-${rowIndex}`
  const handleOpenModal = async () => {
    console.log('Id por celda', cellUniqueId)
    try {
      const response = await fetch(`http://${apiBaseUrl}/${cellUniqueId}`)
      if (response.ok) {
        const matchData = await response.json()
        onMatchSelected(matchData)
      } else {
        // Manejo de errores si la solicitud no fue exitosa
      }
    } catch (error) {
      // Manejo de errores de la solicitud
    }
  }

  return (
    <td className='border border-slate-600'>
      <button className=' p-5 w-full h-full items-center justify-center' onClick={handleOpenModal}>{texto}</button>
    </td>
  )
}

const Horario = () => {
  const [selectedMatch, setSelectedMatch] = useState<MatchData | null>(null)

  const hours = ['9:00-10:30', '10:30-12:00', '12:00-13:30', '13:30-15:00', '15:00-16:30', '16:30-18:00', '18:00-19:30', '19:30-21:00']

  const handleMatchSelected = (match: MatchData) => {
    setSelectedMatch(match)
  }

  return (
    <main className='flex items-center justify-center min-h-screen pt-[70px]'>
      <div>
        <table className="border-collapse text-white border border-slate-600">
          <thead>
            <tr className='[&>th]:p-4 [&>th]: bg-black'>
              <th className="border border-slate-600">Pista 1</th>
              <th className="border border-slate-600">Pista 2</th>
              <th className="border border-slate-600">Pista 3</th>
              <th className="border border-slate-600">Pista 4</th>
              <th className="border border-slate-600">Pista 5</th>
              <th className="border border-slate-600">Pista 6</th>
              <th className="border border-slate-600">Pista 7</th>
              <th className="border border-slate-600">Pista 8</th>
            </tr>
          </thead>
          <tbody className='bg-gray-500/10'>
            {hours.map((hour, rowIndex: any) => (
            <tr key={rowIndex}>
              <TableCells cellId={1} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={2} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={3} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={4} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={5} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={6} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={7} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
              <TableCells cellId={8} rowIndex={rowIndex} onMatchSelected={handleMatchSelected} texto={hour} />
            </tr>
            ))}
          </tbody>
        </table>
        {selectedMatch && (
          <ModalMatches
            matchData={selectedMatch}
            onClose={() => setSelectedMatch(null)}
            open= {true}
        />
        )}
      </div>
    </main>
  )
}

export default Horario
