"use client"

import { useEffect, useRef } from "react"

export default function Background() {
    const spotlight = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = spotlight.current
        if (!el || window.matchMedia("(pointer: coarse)").matches) return

        let frame = 0
        const onMove = (event: PointerEvent) => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => {
                el.style.setProperty("--x", `${event.clientX}px`)
                el.style.setProperty("--y", `${event.clientY}px`)
                el.style.opacity = "1"
            })
        }

        window.addEventListener("pointermove", onMove, { passive: true })
        return () => {
            window.removeEventListener("pointermove", onMove)
            cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="bg-grid mask-radial absolute inset-0" />
            <div className="absolute -left-[10%] -top-[20%] h-[55vmax] w-[55vmax] animate-aurora rounded-full bg-primary/15 blur-[120px]" />
            <div className="absolute -right-[15%] top-[10%] h-[50vmax] w-[50vmax] animate-aurora rounded-full bg-glow/20 blur-[140px] [animation-delay:-7s]" />
            <div className="absolute -bottom-[30%] left-[20%] h-[45vmax] w-[45vmax] animate-aurora rounded-full bg-fuchsia-500/10 blur-[140px] [animation-delay:-14s]" />
            <div
                ref={spotlight}
                className="absolute inset-0 opacity-0 transition-opacity duration-700"
                style={{ background: "radial-gradient(600px circle at var(--x) var(--y), hsl(var(--primary) / 0.07), transparent 40%)" }}
            />
        </div>
    )
}
