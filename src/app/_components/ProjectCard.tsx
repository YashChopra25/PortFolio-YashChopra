"use client"

import { useRef, type PointerEvent } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FaGithub } from "react-icons/fa6"
import type { Project } from "../_utilities/datafileds/Project"

type ProjectCardProps = {
    project: Project
    index: number
    size?: "large" | "default"
}

export default function ProjectCard({ project, index, size = "default" }: ProjectCardProps) {
    const ref = useRef<HTMLElement>(null)
    const large = size === "large"

    const onMove = (event: PointerEvent<HTMLElement>) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`)
        el.style.setProperty("--my", `${event.clientY - rect.top}px`)
    }

    return (
        <article
            ref={ref}
            onPointerMove={onMove}
            className={`glow-border spotlight glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1 ${
                large ? "lg:flex-row" : ""
            }`}
        >
            <div className={`relative overflow-hidden ${large ? "aspect-[16/10] lg:aspect-auto lg:min-h-[440px] lg:w-[56%]" : "aspect-[16/10]"}`}>
                <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    placeholder="blur"
                    sizes={large ? "(min-width: 1024px) 640px, 100vw" : "(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"}
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-black/50 px-2.5 py-1 font-mono text-[11px] text-white backdrop-blur">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    {project.badge && (
                        <span className="rounded-full bg-gradient-to-r from-primary to-glow px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-background shadow-[0_0_20px_-2px_hsl(var(--primary)/0.7)]">
                            {project.badge}
                        </span>
                    )}
                </div>
            </div>

            <div className={`relative z-[2] flex flex-1 flex-col gap-4 p-6 ${large ? "lg:justify-center lg:p-10" : ""}`}>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{project.category}</p>

                <div className="space-y-1.5">
                    <h3 className={`font-display font-bold tracking-tight ${large ? "text-3xl lg:text-4xl" : "text-2xl"}`}>{project.title}</h3>
                    <p className="text-sm font-medium text-foreground/80">{project.tagline}</p>
                </div>

                <p className={`text-sm leading-relaxed text-muted-foreground ${large ? "" : "line-clamp-3"}`}>{project.description}</p>

                {large && project.highlights && (
                    <ul className="grid gap-2 text-sm text-muted-foreground">
                        {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                )}

                <ul className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                        <li key={tech} className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                            {tech}
                        </li>
                    ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:bg-primary hover:text-primary-foreground"
                        >
                            Live demo
                            <ArrowUpRight size={16} />
                        </a>
                    )}
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-semibold transition hover:border-primary/60 hover:text-primary"
                    >
                        <FaGithub size={15} />
                        Source
                    </a>
                </div>
            </div>
        </article>
    )
}
