'use client'

import {
  type FieldValues,
  type RegisterOptions,
  useFormContext
} from 'react-hook-form'

function Input(props: {
  name: string
  label: string
  type: string
  placeholder?: string
  validations?: RegisterOptions<FieldValues, string>
  errorMessage?: string
}) {
  const {
    register,
    formState: { errors }
  } = useFormContext()
  const { name, label, type, placeholder, validations, errorMessage } = props

  return (
    <>
      <label className="text-white block mb-3 mt-2 text-lg" htmlFor={name}>
        {label}
        {validations?.required && <span className="text-red-400"> *</span>}
      </label>
      <input
        className="items-center bg-white/5 text-sm border border-gray-600 text-white rounded-lg block w-full p-3 placeholder-gray-400"
        type={type}
        id={name}
        placeholder={placeholder}
        {...register(name, validations ? { ...validations } : undefined)}
      />
      {errorMessage && errors[name] && (
        <span className="text-red-700">{errorMessage}</span>
      )}
    </>
  )
}

export default Input
