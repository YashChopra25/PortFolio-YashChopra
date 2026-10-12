import { ArrowUpRight } from "lucide-react"
import type { Project } from "../_utilities/datafileds/Project"

export default function WorkList({ projects }: { projects: Project[] }) {
    return (
        <ol className="border-t border-line">
            {projects.map((project, i) => (
                <li key={project.slug}>
                    <a
                        href={project.liveUrl ?? project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group grid grid-cols-[2.25rem_1fr] gap-x-4 rounded-2xl border-b border-line px-2 py-8 transition hover:bg-surface sm:grid-cols-[3.5rem_1fr_auto] sm:gap-x-6 sm:px-5 sm:py-10"
                    >
                        <span className="pt-1 font-mono text-ink-faint transition group-hover:text-accent">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                            <p className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-accent">
                                {project.category} · {project.tagline}
                            </p>
                            <h3 className="mb-3 text-2xl sm:text-3xl">{project.title}</h3>
                            <p className="max-w-[58ch] text-ink-soft">{project.description}</p>
                            <ul className="mt-5 flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <li key={tech} className="chip">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <span className="col-start-2 mt-5 grid h-10 w-10 place-items-center self-center rounded-full border border-line text-ink-faint transition group-hover:translate-x-0.5 group-hover:border-accent group-hover:bg-accent group-hover:text-bg sm:col-start-3 sm:row-start-1 sm:mt-0">
                            <ArrowUpRight size={18} />
                            <span className="sr-only">Open {project.title}</span>
                        </span>
                    </a>
                </li>
            ))}
        </ol>
    )
}
