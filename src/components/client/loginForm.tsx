'use client'

import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: any) => {
    fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(async res => await res.json())
      // .then(data => { console.log(data.token) })
      .catch(err => { console.log(err) })
    console.log(data)
  }

  return (
    <form
      className="flex items-center justify-center h-full"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col">
        <div className="flex flex-col mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            {...register('email', {
              required: 'required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format'
              }
            })}
          />
          {(errors.email != null) && (
            <span className="text-xs text-red-600 text-center">
              Invalid email
            </span>
          )}
        </div>
        <div className="flex flex-col mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'required',
              minLength: 4
            })}
          />
        </div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

export default LoginForm
