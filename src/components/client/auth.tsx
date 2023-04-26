import React from 'react';
import Link from 'next/link';

const Auth = () => {
  return (
    <div className='flex'>
      <Link
        id="login"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-3xl"
        href="/login"
      >
        Iniciar sesión
      </Link>
      <Link
        id="login"
        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-3xl"
        href="/register"
      >
        Registrarse
      </Link>
    </div>
  );
};

export default Auth;
