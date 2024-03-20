import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        console.log(data)
        return NextResponse.json({
            success: true,
            data
        })
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: "Something went wrong"
        })
    }
}