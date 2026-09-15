"use client"

import { useEffect, useState, type MouseEvent } from "react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"
import { AnimatePresence, motion } from "framer-motion"
import { Moon, Sun } from "lucide-react"

type ViewTransitionDocument = Document & {
    startViewTransition?: (update: () => void) => { ready: Promise<void> }
}

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Theme is only known on the client; avoid a hydration mismatch
    useEffect(() => setMounted(true), [])

    const isDark = resolvedTheme === "dark"

    const toggle = (event: MouseEvent<HTMLButtonElement>) => {
        const next = isDark ? "light" : "dark"
        const doc = document as ViewTransitionDocument
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        if (!doc.startViewTransition || prefersReducedMotion) {
            setTheme(next)
            return
        }

        // Keyboard clicks report 0,0 — reveal from the button instead
        let { clientX: x, clientY: y } = event
        if (x === 0 && y === 0) {
            const rect = event.currentTarget.getBoundingClientRect()
            x = rect.left + rect.width / 2
            y = rect.top + rect.height / 2
        }
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

        doc.startViewTransition(() => {
            flushSync(() => setTheme(next))
            document.documentElement.classList.toggle("dark", next === "dark")
            document.documentElement.classList.toggle("light", next === "light")
        }).ready.then(() => {
            document.documentElement.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" }
            )
        })
    }

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
            className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-border/70 bg-card/60 text-foreground transition hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)]"
        >
            {mounted ? (
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={isDark ? "moon" : "sun"}
                        initial={{ y: 14, rotate: -90, opacity: 0 }}
                        animate={{ y: 0, rotate: 0, opacity: 1 }}
                        exit={{ y: -14, rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {isDark ? <Moon size={18} /> : <Sun size={18} />}
                    </motion.span>
                </AnimatePresence>
            ) : (
                <span className="h-[18px] w-[18px]" />
            )}
        </button>
    )
}
