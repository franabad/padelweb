'use client'
import LoginForm from '@/components/client/loginForm'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const LoginPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await fetch('http://localhost:4000/login', {
          method: 'GET',
          credentials: 'include'
        })
        if (response.ok) {
          setLoggedIn(true)
        }
      } catch (error) {
        console.error('Error al comprobar el estado de inicio de sesión: ', error)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    checkLoginStatus()
  }, [])
  return (
    <>
      {loggedIn
        ? (
          <Link href="http://localhost:3000/" />
          )
        : (
          <LoginForm />
          )}
    </>

  )
}

export default LoginPage
