import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import SocialLinks from "./SocialLinks"

export default function Footer() {
    return (
        <footer className="relative mt-24 overflow-hidden border-t border-border/60">
            <div aria-hidden className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div aria-hidden className="absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 bg-primary/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-5 py-20">
                <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                    <div className="space-y-5">
                        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{"// next transmission"}</p>
                        <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                            Let&apos;s build
                            <br />
                            <span className="text-gradient">what&apos;s next.</span>
                        </h2>
                    </div>
                    <Link
                        href="/contact"
                        className="group grid h-36 w-36 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-glow text-center font-semibold text-background shadow-[0_0_60px_-10px_hsl(var(--primary)/0.8)] transition-transform duration-500 hover:scale-105 md:h-40 md:w-40"
                    >
                        <span className="flex flex-col items-center gap-1">
                            Start a project
                            <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                    </Link>
                </div>

                <div className="mt-16 flex flex-col-reverse gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-mono text-xs text-muted-foreground">
                        © {new Date().getFullYear()} Yash Chopra · Designed &amp; built with Next.js
                    </p>
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}
