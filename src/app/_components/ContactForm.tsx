"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ArrowRight, Loader2 } from "lucide-react"
import { email as myEmail } from "../_utilities/datafileds/Socials"

type FormValues = {
    name: string
    email: string
    message: string
    company: string
}

type Status = { type: "success" | "error"; text: string } | null

const fieldClass =
    "w-full rounded-t-lg border-0 border-b border-line bg-ink/[0.03] px-4 py-3.5 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint/60 focus:border-accent focus-visible:outline-none aria-[invalid=true]:border-red-400"

const labelClass = "mb-2 block font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint"

export default function ContactForm() {
    const [status, setStatus] = useState<Status>(null)
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({ defaultValues: { name: "", email: "", message: "", company: "" } })

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setStatus(null)
        try {
            const response = await fetch("/api/sendmessage", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })
            const result = await response.json().catch(() => ({}))
            if (!response.ok || !result.success) throw new Error(result.message)
            reset()
            setStatus({ type: "success", text: "Thanks — your message is on its way. I'll get back to you soon." })
        } catch {
            setStatus({ type: "error", text: `Couldn't send your message. Please email me directly at ${myEmail}.` })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="mb-7">
                <h2 className="text-xl">Send a message</h2>
                <p className="mt-1 text-sm text-ink-faint">It lands straight in my inbox.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Name
                    </label>
                    <input
                        id="name"
                        autoComplete="name"
                        placeholder="Your name"
                        aria-invalid={errors.name ? "true" : "false"}
                        className={fieldClass}
                        {...register("name", {
                            required: "Name is required",
                            maxLength: { value: 100, message: "Name is too long" },
                        })}
                    />
                    {errors.name && (
                        <p role="alert" className="mt-1.5 text-sm text-red-400">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className={labelClass}>
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        aria-invalid={errors.email ? "true" : "false"}
                        className={fieldClass}
                        {...register("email", {
                            required: "Email is required",
                            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, message: "Please enter a valid email" },
                        })}
                    />
                    {errors.email && (
                        <p role="alert" className="mt-1.5 text-sm text-red-400">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="mt-8">
                <label htmlFor="message" className={labelClass}>
                    Message
                </label>
                <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell me about your project, role or idea…"
                    aria-invalid={errors.message ? "true" : "false"}
                    className={`${fieldClass} resize-none`}
                    {...register("message", {
                        required: "Message cannot be empty",
                        maxLength: { value: 5000, message: "Message is too long" },
                    })}
                />
                {errors.message && (
                    <p role="alert" className="mt-1.5 text-sm text-red-400">
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* Honeypot for bots — hidden from people and screen readers */}
            <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register("company")} />

            <div className="mt-10 flex flex-col gap-4">
                <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full justify-center py-3 disabled:cursor-not-allowed disabled:opacity-60">
                    {isSubmitting ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending…
                        </>
                    ) : (
                        <>
                            Send message
                            <ArrowRight size={16} />
                        </>
                    )}
                </button>
                <p aria-live="polite" className={`text-center text-sm ${status?.type === "error" ? "text-red-400" : "text-accent"}`}>
                    {status?.text}
                </p>
            </div>
        </form>
    )
}
