import nodemailer from "nodemailer";
import { email as fallbackRecipient } from "../datafileds/Socials";

export type ContactMessage = {
    name: string;
    email: string;
    message: string;
};

const escapeHtml = (value: string) =>
    value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]!);

export const SendMail = async ({ name, email, message }: ContactMessage) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    return transporter.sendMail({
        from: `"Portfolio contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER_SEND_TO || fallbackRecipient,
        // Hitting reply in the inbox answers the visitor directly
        replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
        subject: `Portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    });
};
