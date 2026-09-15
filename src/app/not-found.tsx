import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="mx-auto flex min-h-[80vh] max-w-3xl flex-col items-center justify-center gap-6 px-5 pt-32 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Error · signal lost</p>
            <div className="relative">
                <span aria-hidden className="text-gradient absolute inset-0 font-display text-[clamp(6rem,22vw,14rem)] font-bold leading-none tracking-tighter opacity-60 blur-2xl">
                    404
                </span>
                <h1 className="text-gradient relative font-display text-[clamp(6rem,22vw,14rem)] font-bold leading-none tracking-tighter">404</h1>
            </div>
            <p className="max-w-md text-lg text-muted-foreground">
                This page drifted out of orbit. The coordinates you entered don&apos;t match anything on this chain.
            </p>
            <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-glow px-7 py-3.5 font-semibold text-background shadow-[0_0_40px_-8px_hsl(var(--primary)/0.8)]"
            >
                <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
                Back to home
            </Link>
        </div>
    )
}
