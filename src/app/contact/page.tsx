"use client"

import React, { useTransition } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import { motion } from 'framer-motion'
import { Send, RotateCcw } from 'lucide-react'
import { ClipLoader } from 'react-spinners'

interface IFormInput {
  name: string,
  email: string,
  message: string
}

const Contact = () => {
  const [isPending, startTransition] = useTransition()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    defaultValues: {
      name: "", email: "", message: ""
    }
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      startTransition(async () => {
        const response = await axios.post("/api/sendmessage", data)
        if (response.data.success) {
          toast.success("Message sent successfully!")
          reset()
        } else {
          toast.error("Failed to send message.")
        }
      })
    } catch (error) {
      toast.error("An error occurred. Please try again.")
    }
  }

  return (
    <main className="min-h-screen py-20 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl glass rounded-3xl overflow-hidden"
      >
        <div className="p-8 md:p-12 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Get in <span className="text-gradient">Touch</span></h1>
            <p className="text-muted-foreground">Have a project in mind? Let&apos;s build something amazing together.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name</label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/,
                      message: "Please enter a valid name"
                    }
                  })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email</label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: "Please enter a valid email"
                    }
                  })}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                />
                {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium ml-1">Message</label>
              <textarea
                {...register("message", { required: "Message cannot be empty" })}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
              />
              {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => reset()}
                className="flex-1 px-6 py-4 rounded-xl border border-border hover:bg-muted font-semibold transition-all flex items-center justify-center gap-2"
              >
                <RotateCcw size={20} />
                Reset
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="flex-[2] px-6 py-4 rounded-xl bg-primary text-primary-foreground hover:opacity-90 font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isPending ? (
                  <ClipLoader size={20} color="currentColor" />
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
      <Toaster position="bottom-right" />
    </main>
  )
}

export default Contact