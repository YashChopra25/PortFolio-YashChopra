const technologies = [
    "Solana",
    "Rust",
    "Anchor",
    "Solidity",
    "Foundry",
    "Ethereum",
    "IPFS",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Supabase",
    "Docker",
    "AWS",
    "TailwindCSS",
    "Framer Motion",
]

export default function TechMarquee() {
    return (
        <section aria-label="Technologies I work with" className="relative border-y border-border/60 bg-card/30 py-6 backdrop-blur-sm">
            <div className="mask-fade-x flex overflow-hidden">
                <ul className="flex w-max shrink-0 animate-marquee items-center gap-10 pr-10 hover:[animation-play-state:paused]">
                    {[...technologies, ...technologies].map((tech, index) => (
                        <li
                            key={index}
                            aria-hidden={index >= technologies.length}
                            className="flex items-center gap-10 whitespace-nowrap font-display text-2xl font-semibold text-muted-foreground/70 md:text-3xl"
                        >
                            {tech}
                            <span className="text-lg text-primary/60">✦</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
