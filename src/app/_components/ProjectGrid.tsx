"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { projects, type ProjectCategory } from "../_utilities/datafileds/Project"

type Filter = "All" | ProjectCategory

const filters: Filter[] = ["All", "Web3", "Full Stack"]

const countFor = (filter: Filter) => (filter === "All" ? projects.length : projects.filter((p) => p.category === filter).length)

export default function ProjectGrid() {
    const [filter, setFilter] = useState<Filter>("All")
    const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter)

    return (
        <div className="space-y-10">
            <div aria-label="Filter projects" className="mx-auto flex w-fit gap-1 rounded-full border border-border/60 bg-card/40 p-1 backdrop-blur">
                {filters.map((option) => {
                    const active = option === filter
                    return (
                        <button
                            key={option}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setFilter(option)}
                            className={`relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                                active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                            }`}
                        >
                            {active && (
                                <motion.span
                                    layoutId="project-filter"
                                    className="absolute inset-0 -z-10 rounded-full border border-primary/40 bg-primary/10"
                                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                />
                            )}
                            {option}
                            <span className="ml-1.5 font-mono text-xs text-muted-foreground">{countFor(option)}</span>
                        </button>
                    )
                })}
            </div>

            <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {visible.map((project, i) => (
                        <motion.div
                            key={project.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96 }}
                            transition={{ duration: 0.4, delay: i * 0.04 }}
                            className={project.featured ? "md:col-span-2 lg:col-span-3" : ""}
                        >
                            <ProjectCard project={project} index={projects.indexOf(project)} size={project.featured ? "large" : "default"} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
