import { SendMail } from "@/app/_utilities/mailer/sendMail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log(data)
        const emailResponse = await SendMail(data.email, data.message, data.name);
        return NextResponse.json({
            success: true,
            emailResponse
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })
    }
}