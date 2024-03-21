import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const SendMail = async (email: string, message: string, name: string): Promise<SMTPTransport.SentMessageInfo> => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
    })
    const mailOption = {
        from: process.env.EMAIL_USER,
        to:process.env.EMAIL_USER_SEND_TO ,
        subject: "Porfolio YashCHopra dev mail for query",
        html: `<p>Email: ${email}, Name:${name}</p> 
            <br>
            <p>Feedback: ${message}</p>
        `,
    }
    const mailResponse = await transporter.sendMail(mailOption);

    return mailResponse

}


