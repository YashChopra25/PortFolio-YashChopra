"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Contact", href: "/contact" },
]

const isActive = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

export default function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    useEffect(() => setOpen(false), [pathname])

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav
                className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-3 pl-4 transition-all duration-500 ${
                    scrolled || open
                        ? "glass shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.3)]"
                        : "border border-transparent"
                }`}
            >
                <Link href="/" className="group flex items-center gap-3" aria-label="Yash Chopra — home">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-glow font-display text-sm font-bold text-background shadow-[0_0_24px_-4px_hsl(var(--primary)/0.7)] transition-transform duration-700 group-hover:rotate-[360deg]">
                        YC
                    </span>
                    <span className="hidden font-mono text-sm tracking-tight sm:block">
                        <span className="text-muted-foreground">~/</span>yash.chopra
                    </span>
                </Link>

                <ul className="hidden items-center gap-1 rounded-full border border-border/60 bg-card/40 p-1 md:flex">
                    {navLinks.map((link) => {
                        const active = isActive(pathname, link.href)
                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`relative isolate block rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                                        active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="nav-active"
                                            className="absolute inset-0 -z-10 rounded-full border border-primary/40 bg-primary/10 shadow-[0_0_18px_-6px_hsl(var(--primary)/0.8)]"
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                        />
                                    )}
                                    {link.name}
                                </Link>
                            </li>
                        )
                    })}
                </ul>

                <div className="flex items-center gap-2">
                    <Link
                        href="/contact"
                        className="hidden items-center gap-2 rounded-full border border-border/60 bg-card/40 px-3 py-2 font-mono text-xs text-muted-foreground transition hover:border-primary/50 hover:text-foreground lg:flex"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Let&apos;s talk
                    </Link>
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setOpen((value) => !value)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/60 md:hidden"
                    >
                        {open ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-2 md:hidden"
                    >
                        <ul>
                            {navLinks.map((link, index) => {
                                const active = isActive(pathname, link.href)
                                return (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            aria-current={active ? "page" : undefined}
                                            className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                                                active ? "bg-primary/10 text-foreground" : "text-muted-foreground hover:text-foreground"
                                            }`}
                                        >
                                            {link.name}
                                            <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
