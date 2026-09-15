"use client"

import { ArrowUpRight } from "lucide-react"
import { socials } from "../_utilities/datafileds/Socials"

export default function SocialLinks({ variant = "icons" }: { variant?: "icons" | "list" }) {
    if (variant === "list") {
        return (
            <ul className="grid gap-3 sm:grid-cols-2">
                {socials.map(({ label, handle, href, icon: Icon }) => (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glow-border glass group flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5"
                        >
                            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/15 to-glow/15 text-primary ring-1 ring-primary/25">
                                <Icon size={20} />
                            </span>
                            <span className="min-w-0 flex-1">
                                <span className="block font-semibold">{label}</span>
                                <span className="block truncate font-mono text-xs text-muted-foreground">{handle}</span>
                            </span>
                            <ArrowUpRight
                                size={18}
                                className="text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                            />
                        </a>
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <ul className="flex items-center gap-2">
            {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-card/40 text-muted-foreground transition hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-[0_0_20px_-4px_hsl(var(--primary)/0.6)]"
                    >
                        <Icon size={18} />
                    </a>
                </li>
            ))}
        </ul>
    )
}
