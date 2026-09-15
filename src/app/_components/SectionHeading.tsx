import type { ReactNode } from "react"

type SectionHeadingProps = {
    eyebrow: string
    title: ReactNode
    description?: ReactNode
    action?: ReactNode
    align?: "left" | "center"
    size?: "lg" | "md"
    as?: "h1" | "h2"
}

export default function SectionHeading({
    eyebrow,
    title,
    description,
    action,
    align = "left",
    size = "lg",
    as: Heading = "h2",
}: SectionHeadingProps) {
    const centered = align === "center"

    return (
        <div className={`flex flex-col gap-6 ${centered ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"}`}>
            <div className={`space-y-4 ${centered ? "max-w-3xl" : "max-w-2xl"}`}>
                <p className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                    <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
                    {eyebrow}
                </p>
                <Heading
                    className={`text-balance font-display font-bold tracking-tight ${
                        size === "lg" ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
                    }`}
                >
                    {title}
                </Heading>
                {description && <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>}
            </div>
            {action}
        </div>
    )
}
