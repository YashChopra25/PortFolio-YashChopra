"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm, SubmitHandler } from "react-hook-form"
import Services from '../service/page';

interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

const Contact = () => {
  const { register, handleSubmit, formState } = useForm<IFormInput>()

  return (
    <Services />
  )



  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
    console.log(formState)
  }
  console.log(formState.errors)
  return (
    <div className='text-orange-400 bg-white'>Contact
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: "this si s", maxLength: 20 })} />
        <input {...register("lastName", {
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "this is not valid "
          }
        })} />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <input type="submit" />
      </form>
      <Toaster />
    </div>
  )
}

export default Contact