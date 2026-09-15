"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from "react-hot-toast"
import { ArrowRight, Loader2, RotateCcw } from "lucide-react"

type FormValues = {
    name: string
    email: string
    message: string
}

const fieldClass =
    "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3.5 text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/70 focus:bg-background focus:shadow-[0_0_0_4px_hsl(var(--primary)/0.12)] aria-[invalid=true]:border-rose-500/70"

const labelClass = "font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"

export default function ContactForm() {
    const [sending, setSending] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({ defaultValues: { name: "", email: "", message: "" } })

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setSending(true)
        try {
            const response = await axios.post("/api/sendmessage", data)
            if (response.data.success) {
                toast.success("Message sent — I'll get back to you soon!")
                reset()
            } else {
                toast.error("Failed to send message.")
            }
        } catch {
            toast.error("An error occurred. Please try again.")
        } finally {
            setSending(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate data-active="true" className="glow-border glass space-y-6 rounded-3xl p-6 md:p-10">
                <div className="flex items-center justify-between border-b border-border/60 pb-5 font-mono text-xs text-muted-foreground">
                    <span>
                        <span className="text-primary">$</span> send --to yash
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        channel open
                    </span>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className={labelClass}>
                            Name
                        </label>
                        <input
                            id="name"
                            autoComplete="name"
                            placeholder="Satoshi Nakamoto"
                            aria-invalid={errors.name ? "true" : "false"}
                            className={fieldClass}
                            {...register("name", {
                                required: "Name is required",
                                pattern: { value: /^[a-zA-Z]+(?: [a-zA-Z]+)*$/, message: "Please enter a valid name" },
                            })}
                        />
                        {errors.name && (
                            <p role="alert" className="text-xs text-rose-500">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className={labelClass}>
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            placeholder="satoshi@bitcoin.org"
                            aria-invalid={errors.email ? "true" : "false"}
                            className={fieldClass}
                            {...register("email", {
                                required: "Email is required",
                                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Please enter a valid email" },
                            })}
                        />
                        {errors.email && (
                            <p role="alert" className="text-xs text-rose-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className={labelClass}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={6}
                        placeholder="Tell me about your project..."
                        aria-invalid={errors.message ? "true" : "false"}
                        className={`${fieldClass} resize-none`}
                        {...register("message", { required: "Message cannot be empty" })}
                    />
                    {errors.message && (
                        <p role="alert" className="text-xs text-rose-500">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <div className="flex flex-col-reverse gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 font-semibold text-muted-foreground transition hover:border-primary/50 hover:text-foreground"
                    >
                        <RotateCcw size={18} />
                        Reset
                    </button>
                    <button
                        type="submit"
                        disabled={sending}
                        className="group relative inline-flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-glow px-6 py-3.5 font-semibold text-background shadow-[0_0_40px_-10px_hsl(var(--primary)/0.8)] transition-shadow hover:shadow-[0_0_50px_-6px_hsl(var(--glow)/0.9)] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {sending ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send message
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </>
                        )}
                    </button>
                </div>
            </form>
            <Toaster
                position="bottom-right"
                toastOptions={{ className: "!rounded-xl !border !border-border !bg-card !text-foreground" }}
            />
        </>
    )
}
