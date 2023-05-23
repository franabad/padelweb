'use client'
import Link from 'next/link'

const Horario = () => {
  return (
    <main className='flex items-center justify-center min-h-screen pt-[70px]'>
      <div>
        <table className="border-collapse text-white border">
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
          <tbody className='[&>tr>td]:p-5 [&>tr>td]:cursor-pointer'>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">
                <Link href="/tenis/09001030p1">09:00-10:30</Link>
              </td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">09:00-10:30</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">10:30-12:00</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">12:00-13:00</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">13:00-14:30</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">14:30-16:00</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">16:00-17:30</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">17:30-19:00</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
              <td className="border border-slate-700 hover:bg-gray-800">19:00-20:30</td>
            </tr>
            <tr>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
              <td className="border border-slate-700 hover:bg-gray-800">20:30-22:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Horario
