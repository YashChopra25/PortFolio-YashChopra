"use client"
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useForm, SubmitHandler } from "react-hook-form"
import Services from '../service/page';
import Input from '../_components/Input';
import axios from 'axios';

interface IFormInput {
  name: string,
  email: string,
  message: string

}

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset, } = useForm<IFormInput>({
    defaultValues: {
      name: "", email: ""
    }
  })

  const onSubmit: SubmitHandler<IFormInput> = async (Messagedata) => {
    try {
      toast.remove()
      console.log(Messagedata)

      const { data } = await axios.post("/api/sendmessage", Messagedata)
      if (!data.success) {
        toast.error("Something went wrong while sending the mail");
        return
      }
      toast.success("Email send successfully", {
        duration: 2000,
        position: "top-center",

      })
      reset()
    } catch (error) {
      toast.error("Something went wrong while sending the mail")
    }
  }
  return (
    <>
      <div className="mx-auto flex max-w-screen-md items-center justify-center mt-8 max-md:px-3 max-md:mb-10">
        <div className=" w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
          <div className="flex h-full w-full items-center justify-center bg-[#172051] flex-col gap-16 py-5">
            <h1 className="text-2xl font-semibold text-white/80 font-sans">Contact Me</h1>
            <form className='mb-10 flex flex-col gap-10 ' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex gap-6 max-md:flex-col'>
                <div className='flex flex-col gap-3'>
                  <Input placeholder="Enter your Name" usedFor="name" autoComplete="off" {
                    ...register("name", {
                      required: "Name is required",
                      validate: {
                        matchPatern: (value) => /^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(value) ||
                          "Invalid Name ",
                      }
                    })
                  } />
                  {errors.name && (
                    <span className='text-red-400 text-xs capitalize ml-2'>{errors.name.message}</span>
                  )}
                </div>
                <div className='flex flex-col gap-3'>
                  <Input typeOfInput='email' placeholder="Enter your email" usedFor="email" autoComplete="off" {...register("email", {
                    required: "Email is required",
                    validate: {
                      matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address is not valid",
                    }
                  })} />
                  {errors.email && (
                    <span className='text-red-400 text-xs capitalize ml-2'> {errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <textarea id=":6cs7" cols={30} rows={10} className='bg-[#434275] px-5 py-2 rounded-md focus:outline-[#5250a5] outline-none border-none capitalize text-white' placeholder='Enter your Feedback' {...register("message", {
                  required: "Empty message cannot be send"
                })}></textarea>
                {errors.message && (
                  <span className='text-red-400 text-xs capitalize ml-2'>{errors.message.message}</span>
                )}
              </div>
              <div className='flex gap-5'>
                <button type='button' className='bg-[#434275] px-5 py-2 w-1/2 mx-auto rounded-md text-white/80' onClick={() => reset()}>Reset</button>
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