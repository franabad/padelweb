'use client';

import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  return (
    <form
      className="flex items-center justify-center h-full"
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
                message: 'Entered value does not match email format',
              },
            })}
          />
          {errors.email && (
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
              minLength: 8,
            })}
          />
        </div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default RegisterForm;
