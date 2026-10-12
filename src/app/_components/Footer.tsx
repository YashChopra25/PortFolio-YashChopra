import { socials } from "../_utilities/datafileds/Socials"

export default function Footer() {
    return (
        <footer className="mt-12 border-t border-line">
            <div className="wrap flex flex-col gap-4 py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
                <p>© {new Date().getFullYear()} Yash Chopra · Built with Next.js</p>
                <ul className="flex gap-5">
                    {socials.map((social) => (
                        <li key={social.label}>
                            <a href={social.href} target="_blank" rel="noreferrer" className="transition hover:text-ink">
                                {social.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
