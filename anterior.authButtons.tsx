// import React from 'react'
// import Link from 'next/link'
// import { signIn } from 'next-auth/react'
// import { getServerSession } from 'next-auth'
// import { authOptions } from '../../pages/api/auth/[...nextauth]'

// const Auth = async () => {
//   const session = await getServerSession(authOptions)

//   console.log(session)

//   return (
//     <div className="flex">
//       {session?.user != null ? (
//         <p className='text-white'>Mi perfil</p>
//       ) : (
//         <>
//           <button
//             id="login"
//             className="bg-transparent hover:text-gray-300 text-white font-bold py-2 px-4 rounded-lg mr-2"
//             // href="/login"
//             // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
//             onClick={() => signIn()}
//           >
//             Sign in
//           </button>
//           <Link
//             id="register"
//             className="bg-transparent text-white hover:text-gray-300 hover:bg-slate-950/100 font-bold py-2 px-3 border border-white rounded-lg"
//             href="/register"
//           >
//             Sign up
//           </Link>
//         </>
//       )}
//     </div>
//   )
// }

// export default Auth
