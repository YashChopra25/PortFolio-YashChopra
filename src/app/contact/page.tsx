import type { Metadata } from "next"
import { ArrowUpRight, Mail } from "lucide-react"
import ContactForm from "../_components/ContactForm"
import CopyEmail from "../_components/CopyEmail"
import { email, socials } from "../_utilities/datafileds/Socials"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Yash Chopra about Web3 protocols, full-stack products or freelance work.",
}

const subject = encodeURIComponent("Hello Yash")
const channels = ["X", "LinkedIn", "GitHub"].map((label) => socials.find((social) => social.label === label)!)

const rowClass = "flex items-center gap-4 border-b border-line py-4"
const iconClass = "grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-surface text-ink-soft ring-1 ring-line"

export default function ContactPage() {
  return (
    <section className="wrap py-16 sm:py-24">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mb-5 text-[clamp(2.2rem,6vw,3.25rem)] leading-[1.08]">Let&apos;s work together.</h1>
          <p className="max-w-[44ch] text-ink-soft">
            Have a protocol to ship, a product to build, or a role you think I&apos;d fit? Drop a message or reach me
            directly — I read everything.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Open to full-time roles &amp; freelance work
          </p>

          <ul className="mt-10 border-t border-line">
            <li className={rowClass}>
              <span className={iconClass}>
                <Mail size={16} />
              </span>
              <a href={`mailto:${email}?subject=${subject}`} className="group min-w-0 flex-1">
                <span className="block text-xs uppercase tracking-[0.12em] text-ink-faint">Email</span>
                <span className="block truncate font-medium transition group-hover:text-accent">{email}</span>
              </a>
              <CopyEmail />
            </li>
            {channels.map((social) => (
              <li key={social.label}>
                <a href={social.href} target="_blank" rel="noreferrer" className={`group ${rowClass}`}>
                  <span className={iconClass}>
                    <social.icon size={16} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.12em] text-ink-faint">{social.label}</span>
                    <span className="block truncate font-medium transition group-hover:text-accent">{social.handle}</span>
                  </span>
                  <ArrowUpRight size={18} className="flex-shrink-0 text-ink-faint transition group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
