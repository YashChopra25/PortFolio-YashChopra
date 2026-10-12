import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import WorkList from "./_components/WorkList"
import { projects } from "./_utilities/datafileds/Project"
import { ExperienceData } from "./_utilities/datafileds/Experience"
import { EducationData } from "./_utilities/datafileds/Education"
import { skillSet } from "./_utilities/datafileds/SkillSet"
import { email, socials } from "./_utilities/datafileds/Socials"

const stats = [
  { value: `${projects.length}`, label: "projects shipped, from launchpads to dashboards" },
  { value: "3", label: "chains built on — Solana, Ethereum, Robinhood" },
  { value: "2.5+", label: "years writing production code" },
  { value: "58+", label: "contract tests on the HoodPad protocol" },
]

export default function Home() {
  const resumeLink = process.env.RESUME_DRIVE_LINK
  const selected = projects.slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="wrap pb-16 pt-16 sm:pb-20 sm:pt-24">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Open to new opportunities
        </p>
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-accent">Full Stack &amp; Web3 Engineer</p>
        <h1 className="mb-6 text-[clamp(2.4rem,8vw,4.25rem)] leading-[1.08]">Yash Chopra</h1>
        <p className="max-w-[60ch] text-[clamp(1.05rem,2.4vw,1.3rem)] leading-relaxed text-ink-soft">
          I build smart contracts, Solana programs and the full-stack products around them — interfaces that are simple to
          use, backed by systems that are tested and dependable.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="btn btn-primary">
            View selected work
          </a>
          <Link href="/contact" className="btn">
            Get in touch
          </Link>
          {resumeLink && (
            <a href={resumeLink} target="_blank" rel="noreferrer" className="btn">
              Resume ↓
            </a>
          )}
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-x-5 gap-y-6 border-t border-line pt-8 sm:mt-16sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <li key={stat.value} className="flex flex-col gap-1.5">
              <span className="text-[clamp(1.5rem,4vw,2.1rem)] font-semibold tracking-[-0.02em]">{stat.value}</span>
              <span className="text-sm leading-snug text-ink-faint">{stat.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Work */}
      <section id="work" className="wrap py-16 sm:py-24">
        <p className="eyebrow">Selected Work</p>
        <h2 className="mb-10 max-w-[24ch] text-[clamp(1.5rem,3.5vw,2rem)]">
          Products and protocols I&apos;ve designed, built and shipped.
        </h2>
        <WorkList projects={selected} />
        <Link href="/project" className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink-soft hover:text-ink">
          All projects
          <ArrowRight size={15} className="transition group-hover:translate-x-0.5" />
        </Link>
      </section>

      {/* About */}
      <section id="about" className="wrap py-16 sm:py-24">
        <p className="eyebrow">About</p>
        <div className="flex max-w-[64ch] flex-col gap-5 text-[clamp(1.02rem,2vw,1.15rem)] leading-[1.75] text-ink-soft">
          <p>
            I&apos;m <span className="font-medium text-ink">Yash Chopra</span>, a full stack and Web3 engineer. I started out
            building React and Next.js products, and over time moved deeper into the stack — APIs, databases, cloud
            infrastructure and, more recently, smart contracts.
          </p>
          <p>
            Lately that work lives on-chain: a non-custodial memecoin launchpad on Robinhood Chain, an inheritance protocol on
            Solana where silence is the trigger, and real-time analytics for Solana wallets and transactions.
          </p>
          <p>
            I care about the boring parts that make software trustworthy — clear contracts, real test suites and interfaces
            that don&apos;t make people think. I&apos;d rather ship something small that works than something clever that
            doesn&apos;t.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="wrap py-16 sm:py-24">
        <p className="eyebrow">Experience</p>
        <div>
          {ExperienceData.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="grid gap-3 border-t border-line py-8 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:py-10"
            >
              <div className="text-sm text-ink-faint">
                <p className="font-mono">{job.period}</p>
                <p className="mt-1">{job.location}</p>
              </div>
              <div>
                <h3 className="text-xl">
                  {job.position} <span className="text-ink-faint">· {job.company}</span>
                </h3>
                <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-ink-soft marker:text-ink-faint">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          <article className="grid gap-3 border-y border-line py-8 sm:grid-cols-[13rem_1fr] sm:gap-10 sm:py-10">
            <p className="font-mono text-sm text-ink-faint">Education</p>
            <ul className="flex flex-col gap-4">
              {EducationData.slice(0, 2).map((edu) => (
                <li key={edu.degree}>
                  <h3 className="text-lg">{edu.degree}</h3>
                  <p className="text-ink-soft">
                    {edu.institution} · {edu.year}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="wrap py-16 sm:py-24">
        <p className="eyebrow">Stack</p>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillSet.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-medium text-ink">{group.category}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="chip">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="wrap py-16 sm:py-24">
        <p className="eyebrow">Contact</p>
        <h2 className="mb-4 max-w-[22ch] text-[clamp(1.75rem,4.5vw,2.5rem)]">Have something in mind? Let&apos;s talk.</h2>
        <p className="mb-8 max-w-[56ch] text-ink-soft">
          The fastest way to reach me is email. I usually reply within a day.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${email}`} className="btn btn-primary">
            {email}
          </a>
          {socials.slice(0, 3).map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="btn">
              {social.label}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}
