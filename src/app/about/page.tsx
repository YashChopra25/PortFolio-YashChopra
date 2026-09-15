import type { ReactNode } from "react"
import type { Metadata } from "next"
import { Briefcase, Compass, User, type LucideIcon } from "lucide-react"
import Reveal from "../_components/Reveal"
import SectionHeading from "../_components/SectionHeading"
import Skill from "../_components/Skill"
import Experience from "../_components/Experience"
import Education from "../_components/Education"
import { ExperienceData } from "../_utilities/datafileds/Experience"

export const metadata: Metadata = {
    title: "About",
    description: "The story, stack and experience behind Yash Chopra — Full Stack & Web3 engineer.",
}

const focusAreas = ["Smart contracts", "Token launches & DeFi", "Solana programs", "Full-stack products", "Real-time systems", "UI engineering"]

function CardLabel({ icon: Icon, children }: { icon: LucideIcon; children: ReactNode }) {
    return (
        <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 ring-1 ring-primary/25">
                <Icon size={15} />
            </span>
            {children}
        </p>
    )
}

export default function AboutPage() {
    const current = ExperienceData.find((job) => job.current) ?? ExperienceData[0]

    return (
        <div className="mx-auto max-w-6xl space-y-28 px-5 pt-36">
            <Reveal>
                <SectionHeading
                    as="h1"
                    eyebrow="About me"
                    title={
                        <>
                            Beyond the <span className="text-gradient">code</span>.
                        </>
                    }
                    description="I believe great products do more than work — they solve real problems and feel effortless doing it."
                />
            </Reveal>

            <section className="grid gap-4 md:grid-cols-5">
                <Reveal className="glow-border glass rounded-3xl p-8 md:col-span-3 md:row-span-2 md:p-10">
                    <CardLabel icon={User}>My story</CardLabel>
                    <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                        <p>
                            Hello! I&apos;m <span className="font-semibold text-foreground">Yash Chopra</span>, a Full Stack &amp; Web3
                            engineer who builds products that are as functional as they are beautiful.
                        </p>
                        <p>
                            My journey in tech is driven by curiosity and a relentless desire to learn. Lately that curiosity lives
                            on-chain — shipping a memecoin launchpad on Robinhood Chain and a dead-man&apos;s-switch inheritance protocol
                            on Solana.
                        </p>
                        <p>
                            Whether it&apos;s a smart contract, a high-performance backend or a pixel-perfect interface, I bring the same
                            detail-oriented approach to every layer of the stack.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={0.1} className="glow-border glass rounded-3xl p-7 md:col-span-2">
                    <CardLabel icon={Briefcase}>Currently</CardLabel>
                    <p className="mt-5 font-display text-2xl font-semibold">{current.position}</p>
                    <p className="mt-1 text-primary">{current.company}</p>
                    <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                        {current.period} · {current.location}
                    </p>
                </Reveal>

                <Reveal delay={0.2} className="glow-border glass rounded-3xl p-7 md:col-span-2">
                    <CardLabel icon={Compass}>Focus areas</CardLabel>
                    <ul className="mt-5 flex flex-wrap gap-2">
                        {focusAreas.map((area) => (
                            <li key={area} className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-sm text-muted-foreground">
                                {area}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </section>

            <section className="space-y-12">
                <Reveal>
                    <SectionHeading
                        eyebrow="Stack"
                        title={
                            <>
                                Technical <span className="text-gradient">arsenal</span>.
                            </>
                        }
                        description="The languages, frameworks and tools I reach for — from on-chain programs to cloud infrastructure."
                    />
                </Reveal>
                <Reveal>
                    <Skill />
                </Reveal>
            </section>

            <section className="grid gap-16 lg:grid-cols-5 lg:gap-10">
                <div className="space-y-10 lg:col-span-3">
                    <Reveal>
                        <SectionHeading eyebrow="Journey" title="Experience" size="md" />
                    </Reveal>
                    <Reveal>
                        <Experience />
                    </Reveal>
                </div>
                <div className="space-y-10 lg:col-span-2">
                    <Reveal>
                        <SectionHeading eyebrow="Foundation" title="Education" size="md" />
                    </Reveal>
                    <Reveal>
                        <Education />
                    </Reveal>
                </div>
            </section>
        </div>
    )
}
