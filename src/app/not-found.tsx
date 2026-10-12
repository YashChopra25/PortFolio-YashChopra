import Link from "next/link"

export default function NotFound() {
    return (
        <section className="wrap flex min-h-[60vh] flex-col justify-center py-24">
            <p className="eyebrow">404</p>
            <h1 className="mb-4 text-[clamp(2.2rem,7vw,3.75rem)] leading-[1.08]">Page not found.</h1>
            <p className="mb-8 max-w-[48ch] text-ink-soft">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
            <div>
                <Link href="/" className="btn btn-primary">
                    ← Back to home
                </Link>
            </div>
        </section>
    )
}
