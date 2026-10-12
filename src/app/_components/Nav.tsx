import Link from "next/link"

const links = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/contact" },
]

export default function Nav() {
    return (
        <header className="sticky top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur-md">
            <nav className="wrap flex h-16 items-center justify-between gap-4">
                <Link href="/" className="font-semibold tracking-tight">
                    Yash Chopra
                </Link>
                <ul className="-mr-2.5 flex items-center text-sm text-ink-soft sm:-mr-3">
                    {links.map((link) => (
                        <li key={link.name} className={link.name === "About" || link.name === "Experience" ? "hidden sm:block" : ""}>
                            <Link href={link.href} className="rounded-full px-2.5 py-1.5 transition hover:text-ink sm:px-3">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
