"use client"
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm, SubmitHandler } from "react-hook-form"
import Services from '../service/page';
import Input from '../_components/Input';

interface IFormInput {
  firstName: string
  lastName: string
  age: number
}

const Contact = () => {
  const { register, handleSubmit, formState } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data)
    console.log(formState)
  }
  console.log(formState.errors)
  return (
    <>
      <div className="mx-auto flex max-w-screen-md items-center justify-center mt-8 max-md:px-3 max-md:mb-10">
        <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-[#172051] flex-col gap-16 py-5">
            <h1 className="text-2xl font-semibold text-white/80 font-sans">Contact Me</h1>
            <form className='mb-10 flex flex-col gap-10 ' onSubmit={handleSubmit(onSubmit)}>
              <div>

                <div className='flex gap-6 max-md:flex-col'>
                  <div className='flex flex-col gap-3'>
                    <Input typeOfInput='email' placeholder="Enter your Name" name="name" />
                    {/* <span className='text-red-400 text-xs capitalize ml-2'>Name is required</span> */}
                  </div>
                  <div className='flex flex-col gap-3'>
                    <Input typeOfInput='email' placeholder="Enter your email" name="email" />
                    {/* <span className='text-red-400 text-xs capitalize ml-2'>Email is required</span> */}
                  </div>

                </div>

              </div>
              <textarea name="" id="" cols={30} rows={10} className='bg-[#434275] px-5 py-2 rounded-md focus:outline-[#5250a5] outline-none border-none capitalize text-white' placeholder='Enter your Feedback'></textarea>
              <div className='flex gap-5'>
                <button type='reset' className='bg-[#434275] px-5 py-2 w-1/2 mx-auto rounded-md text-white/80'>Reset</button>
                <button type='submit' className='bg-[#434275] px-5 py-2 w-1/2 mx-auto rounded-md text-white/80'>Submit</button>
              </div>

            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default Contact