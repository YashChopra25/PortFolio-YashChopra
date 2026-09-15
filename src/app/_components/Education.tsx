import { GraduationCap } from "lucide-react"
import { EducationData } from "../_utilities/datafileds/Education"

export default function Education() {
    return (
        <ol className="space-y-3">
            {EducationData.map((edu) => (
                <li key={edu.degree} className="glow-border glass flex gap-4 rounded-2xl p-5">
                    <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-glow/15 text-primary ring-1 ring-primary/25">
                        <GraduationCap size={18} />
                    </span>
                    <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                            <h3 className="font-display font-semibold leading-snug">{edu.degree}</h3>
                            <span className="font-mono text-xs text-primary">{edu.year}</span>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                    </div>
                </li>
            ))}
        </ol>
    )
}
