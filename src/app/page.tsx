import Link from "next/link"
import { ArrowUpRight, Blocks, Layers, Sparkles } from "lucide-react"
import Hero from "./_components/Hero"
import TechMarquee from "./_components/TechMarquee"
import Reveal from "./_components/Reveal"
import SectionHeading from "./_components/SectionHeading"
import ProjectCard from "./_components/ProjectCard"
import { projects } from "./_utilities/datafileds/Project"
import { ExperienceData } from "./_utilities/datafileds/Experience"

const capabilities = [
  {
    icon: Blocks,
    title: "Protocols & smart contracts",
    body: "Solidity and Rust/Anchor programs backed by real test suites — bonding curves, custodian quorums, token launches and on-chain registries.",
    tags: ["Solidity", "Rust · Anchor", "Foundry"],
  },
  {
    icon: Layers,
    title: "Full-stack product engineering",
    body: "Production Next.js, Node and Python services on Postgres, MongoDB and Supabase, deployed across AWS, GCP and Vercel.",
    tags: ["Next.js", "Node.js", "Python"],
  },
  {
    icon: Sparkles,
    title: "Interfaces that feel alive",
    body: "Responsive, accessible UIs with motion that guides rather than distracts — wallets, dashboards and builders people enjoy using.",
    tags: ["React", "Tailwind", "Framer Motion"],
  },
]

export default function Home() {
  const featured = projects.filter((project) => project.featured)
  const stats = [
    { value: `${projects.length}+`, label: "Projects shipped" },
    { value: "3", label: "Chains built on" },
    { value: "2+", label: "Years in production" },
    { value: `${ExperienceData.length}`, label: "Engineering roles" },
  ]

  return (
    <>
      <Hero resumeLink={process.env.RESUME_DRIVE_LINK} />
      <TechMarquee />

      <section className="mx-auto max-w-6xl px-5 py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title={
              <>
                From <span className="text-gradient">smart contracts</span> to pixels.
              </>
            }
            description="I work across the whole stack — the on-chain logic, the services around it, and the interface on top."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, body, tags }, index) => (
            <Reveal key={title} delay={index * 0.1} className="glow-border glass group h-full rounded-3xl p-7">
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/20 to-glow/20 text-primary ring-1 ring-primary/30 transition-shadow group-hover:shadow-[0_0_30px_-4px_hsl(var(--primary)/0.7)]">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <li key={tag} className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="glass rounded-3xl p-6">
              <p className="text-gradient font-display text-4xl font-bold md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title={
              <>
                Freshly <span className="text-gradient">deployed</span>.
              </>
            }
            description="My latest builds — open source, with live demos you can click through right now."
            action={
              <Link
                href="/project"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm font-semibold backdrop-blur transition hover:border-primary/60 hover:text-primary"
              >
                All {projects.length} projects
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            }
          />
        </Reveal>

        <div className="mt-14 space-y-6">
          {featured.map((project, index) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} index={index} size="large" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
