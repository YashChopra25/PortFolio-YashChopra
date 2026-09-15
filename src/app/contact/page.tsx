import type { Metadata } from "next"
import Reveal from "../_components/Reveal"
import SectionHeading from "../_components/SectionHeading"
import SocialLinks from "../_components/SocialLinks"
import ContactForm from "../_components/ContactForm"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Yash Chopra about Web3 protocols, full-stack products or freelance work.",
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pt-36">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="space-y-10">
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title={
              <>
                Let&apos;s <span className="text-gradient">connect</span>.
              </>
            }
            description="Have a protocol to ship, a product to build, or just an idea worth exploring? I'd love to hear about it."
          />
          <SocialLinks variant="list" />
        </Reveal>
        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  )
}
