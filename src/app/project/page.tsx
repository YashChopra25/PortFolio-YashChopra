import type { Metadata } from "next"
import WorkList from "../_components/WorkList"
import { projects } from "../_utilities/datafileds/Project"

export const metadata: Metadata = {
    title: "Projects",
    description: "On-chain protocols, full-stack apps and experiments built by Yash Chopra — including HoodPad and VaultWill.",
}

export default function ProjectsPage() {
    return (
        <section className="wrap py-16 sm:py-24">
            <p className="eyebrow">Projects</p>
            <h1 className="mb-4 text-[clamp(2.2rem,7vw,3.75rem)] leading-[1.08]">Everything I&apos;ve shipped.</h1>
            <p className="mb-12 max-w-[56ch] text-ink-soft">
                From on-chain protocols to full-stack apps — products, experiments and open-source builds.
            </p>
            <WorkList projects={projects} />
        </section>
    )
}
