"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { email } from "../_utilities/datafileds/Socials"

export default function CopyEmail() {
    const [copied, setCopied] = useState(false)

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch {
            // Clipboard can be blocked; the mailto link still works
        }
    }

    return (
        <button
            type="button"
            onClick={copy}
            aria-label={copied ? "Email copied" : "Copy email address"}
            title={copied ? "Copied" : "Copy email"}
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-line text-ink-faint transition hover:border-ink hover:text-ink"
        >
            {copied ? <Check size={15} className="text-accent" /> : <Copy size={15} />}
        </button>
    )
}
