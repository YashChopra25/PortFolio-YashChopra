import type { Metadata } from "next"
import Reveal from "../_components/Reveal"
import SectionHeading from "../_components/SectionHeading"
import ProjectGrid from "../_components/ProjectGrid"

export const metadata: Metadata = {
    title: "Projects",
    description: "On-chain protocols, full-stack apps and experiments built by Yash Chopra — including HoodPad and VaultWill.",
}

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-6xl space-y-14 px-5 pt-36">
            <Reveal>
                <SectionHeading
                    as="h1"
                    align="center"
                    eyebrow="Projects"
                    title={
                        <>
                            Things I&apos;ve <span className="text-gradient">shipped</span>.
                        </>
                    }
                    description="From on-chain protocols to full-stack apps — a collection of products, experiments and open-source builds."
                />
            </Reveal>
            <ProjectGrid />
        </div>
    )
}
