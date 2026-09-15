import { ExperienceData } from "../_utilities/datafileds/Experience"

export default function Experience() {
    return (
        <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[11px] before:top-2 before:w-px before:bg-gradient-to-b before:from-primary before:via-glow/50 before:to-transparent">
            {ExperienceData.map((job) => (
                <li key={`${job.company}-${job.period}`} className="relative pl-10">
                    <span className="absolute left-0 top-7 grid h-6 w-6 place-items-center rounded-full border border-primary/40 bg-background">
                        <span className={`h-2 w-2 rounded-full bg-primary ${job.current ? "animate-pulse shadow-[0_0_12px_hsl(var(--primary))]" : ""}`} />
                    </span>

                    <div className="glow-border glass rounded-2xl p-6">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                            <div>
                                <h3 className="font-display text-xl font-semibold">{job.position}</h3>
                                <p className="text-sm font-medium text-primary">
                                    {job.company} <span className="text-muted-foreground">· {job.location}</span>
                                </p>
                            </div>
                            <span className="rounded-full border border-border/70 px-3 py-1 font-mono text-[11px] text-muted-foreground">{job.period}</span>
                        </div>

                        <ul className="mt-4 space-y-2">
                            {job.highlights.map((point) => (
                                <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                                    {point}
                                </li>
                            ))}
                        </ul>

                        <ul className="mt-5 flex flex-wrap gap-1.5">
                            {job.skills.map((skill) => (
                                <li key={skill} className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ol>
    )
}
