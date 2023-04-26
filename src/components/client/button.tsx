import React from "react";
import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      id="login"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
      href="/login"
    >
      Iniciar sesión
    </Link>
  );
};

export default LoginButton;
