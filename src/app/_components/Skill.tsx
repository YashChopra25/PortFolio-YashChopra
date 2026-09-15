"use client"

import { useState } from "react"
import { skillSet, type SkillItem } from "../_utilities/datafileds/SkillSet"

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/"

const initialsOf = (name: string) =>
    name
        .replace(/\(.*\)/, "")
        .split(/[\s.]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase()

function SkillIcon({ skill }: { skill: SkillItem }) {
    const [failed, setFailed] = useState(false)

    if (!skill.icon || failed) {
        return (
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary/20 to-glow/20 font-mono text-[11px] font-bold text-primary">
                {initialsOf(skill.name)}
            </span>
        )
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`${DEVICON_BASE}${skill.icon}`}
            alt=""
            loading="lazy"
            onError={() => setFailed(true)}
            className={`h-8 w-8 object-contain ${skill.mono ? "dark:invert" : ""}`}
        />
    )
}

export default function Skill() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillSet.map((category, index) => (
                <div key={category.category} className="glow-border glass rounded-3xl p-6">
                    <div className="mb-5 flex items-center justify-between">
                        <h3 className="font-display text-lg font-semibold">{category.category}</h3>
                        <span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <ul className="grid grid-cols-2 gap-2">
                        {category.skills.map((skill) => (
                            <li
                                key={skill.name}
                                className="group flex items-center gap-3 rounded-xl border border-border/50 bg-background/40 p-2.5 transition hover:border-primary/50 hover:bg-primary/5"
                            >
                                <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                                    <SkillIcon skill={skill} />
                                </span>
                                <span className="text-sm leading-tight text-muted-foreground transition-colors group-hover:text-foreground">
                                    {skill.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
