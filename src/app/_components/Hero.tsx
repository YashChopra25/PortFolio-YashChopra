"use client"

import type { PointerEvent } from "react"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform, type Variants } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"
import { ArrowRight, Download } from "lucide-react"
import SocialLinks from "./SocialLinks"

const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const config: [key: string, value: string][] = [
    ["role", '"Full Stack & Web3 Engineer"'],
    ["chains", '["Solana", "Ethereum", "Robinhood"]'],
    ["stack", '["Next.js", "Rust", "Solidity"]'],
    ["shipped", '["HoodPad", "VaultWill"]'],
    ["status", '"always_building"'],
]

export default function Hero({ resumeLink }: { resumeLink?: string }) {
    return (
        <section className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-16 px-5 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pt-24">
            <motion.div variants={container} initial="hidden" animate="visible" className="space-y-8">
                <motion.p
                    variants={item}
                    className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/5 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary"
                >
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                    Full Stack · Web3 Engineer
                </motion.p>

                <motion.h1
                    variants={item}
                    className="font-display text-[clamp(2.75rem,7vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.04em]"
                >
                    Hi, I&apos;m Yash.
                    <br />I engineer the <span className="text-gradient">on-chain</span> future.
                </motion.h1>

                <motion.div variants={item} className="flex min-h-8 items-center gap-2 font-mono text-base text-muted-foreground md:text-lg">
                    <span className="text-primary">&gt;</span>
                    <span className="text-foreground">
                        <Typewriter
                            words={[
                                "building on Solana & Ethereum",
                                "shipping full-stack Next.js apps",
                                "writing Rust, Solidity & TypeScript",
                                "designing interfaces that feel alive",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="▍"
                            typeSpeed={55}
                            deleteSpeed={30}
                            delaySpeed={1800}
                        />
                    </span>
                </motion.div>

                <motion.p variants={item} className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                    I craft high-performance web apps and decentralized protocols — from a memecoin launchpad on Robinhood Chain to an
                    inheritance vault on Solana — with interfaces people genuinely enjoy using.
                </motion.p>

                <motion.div variants={item} className="flex flex-wrap items-center gap-3">
                    <Link
                        href="/project"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-glow px-7 py-3.5 font-semibold text-background shadow-[0_0_40px_-8px_hsl(var(--primary)/0.8)] transition-shadow hover:shadow-[0_0_60px_-6px_hsl(var(--glow)/0.9)]"
                    >
                        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                        <span className="relative">Explore my work</span>
                        <ArrowRight size={18} className="relative transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 font-semibold backdrop-blur transition hover:border-primary/60 hover:text-primary"
                    >
                        Hire me
                    </Link>
                    {resumeLink && (
                        <a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 font-semibold text-muted-foreground transition hover:text-foreground"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    )}
                </motion.div>

                <motion.div variants={item} className="pt-2">
                    <SocialLinks />
                </motion.div>
            </motion.div>

            <HoloCard />
        </section>
    )
}

function HoloCard() {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 })
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 20 })

    const onMove = (event: PointerEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect()
        x.set((event.clientX - rect.left) / rect.width - 0.5)
        y.set((event.clientY - rect.top) / rect.height - 0.5)
    }

    const reset = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onPointerMove={onMove}
            onPointerLeave={reset}
            className="relative mx-auto w-full max-w-md [perspective:1200px]"
        >
            <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2">
                <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/25">
                    <span className="absolute left-[14%] top-[14%] h-2 w-2 rounded-full bg-primary shadow-[0_0_14px_4px_hsl(var(--primary)/0.6)]" />
                </div>
                <div className="absolute inset-[12%] animate-spin-slower rounded-full border border-glow/20">
                    <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-glow shadow-[0_0_16px_4px_hsl(var(--glow)/0.7)]" />
                </div>
                <div className="absolute inset-[26%] rounded-full bg-gradient-to-br from-primary/30 to-glow/30 blur-3xl" />
            </div>

            <motion.div
                style={{ rotateX, rotateY }}
                data-active="true"
                className="glow-border glass relative rounded-3xl p-1 shadow-2xl shadow-primary/10"
            >
                <div className="overflow-hidden rounded-[1.25rem] border border-border/50 bg-background/70">
                    <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3">
                        <span className="h-3 w-3 rounded-full bg-rose-400/80" />
                        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                        <span className="ml-3 font-mono text-xs text-muted-foreground">yash.config.ts</span>
                        <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-emerald-500 dark:text-emerald-400">
                            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
                            live
                        </span>
                    </div>
                    <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-7 sm:text-[13px]">
                        <code>
                            <span className="block">
                                <span className="text-glow">export const</span> <span className="text-primary">yash</span>{" "}
                                <span className="text-muted-foreground">=</span> {"{"}
                            </span>
                            {config.map(([key, value], index) => (
                                <motion.span
                                    key={key}
                                    className="block pl-5"
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.9 + index * 0.12 }}
                                >
                                    <span className="text-foreground/90">{key}</span>
                                    <span className="text-muted-foreground">: </span>
                                    <span className="text-emerald-600 dark:text-emerald-300">{value}</span>
                                    <span className="text-muted-foreground">,</span>
                                </motion.span>
                            ))}
                            <span className="block">
                                {"}"}
                                <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-primary" />
                            </span>
                        </code>
                    </pre>
                </div>
            </motion.div>

            <div className="absolute -bottom-6 -left-4 hidden animate-float sm:block">
                <div className="glass rounded-2xl px-4 py-3 shadow-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Latest deploys</p>
                    <p className="mt-1 font-display text-sm font-semibold">HoodPad · VaultWill</p>
                </div>
            </div>
            <div className="absolute -right-4 -top-6 hidden animate-float [animation-delay:-3s] sm:block">
                <div className="glass rounded-2xl px-4 py-3 shadow-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Chains</p>
                    <p className="mt-1 font-display text-sm font-semibold text-gradient">SOL · ETH · HOOD</p>
                </div>
            </div>
        </motion.div>
    )
}
