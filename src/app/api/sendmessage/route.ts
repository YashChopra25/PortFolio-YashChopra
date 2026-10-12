import { NextRequest, NextResponse } from "next/server";
import { SendMail } from "@/app/_utilities/mailer/sendMail";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req: NextRequest) {
    const data = await req.json().catch(() => null);
    const name = typeof data?.name === "string" ? data.name.trim() : "";
    const email = typeof data?.email === "string" ? data.email.trim() : "";
    const message = typeof data?.message === "string" ? data.message.trim() : "";

    // Honeypot: real visitors never see or fill this field
    if (data?.company) {
        return NextResponse.json({ success: true });
    }

    if (!name || name.length > 100 || !EMAIL_PATTERN.test(email) || !message || message.length > 5000) {
        return NextResponse.json({ success: false, message: "Please check the form and try again." }, { status: 400 });
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
        console.error("sendmessage: EMAIL_USER / EMAIL_PASSWORD are not configured");
        return NextResponse.json({ success: false, message: "Email is not configured." }, { status: 500 });
    }

    try {
        await SendMail({ name, email, message });
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("sendmessage: failed to send", error);
        return NextResponse.json({ success: false, message: "Something went wrong." }, { status: 500 });
    }
}
