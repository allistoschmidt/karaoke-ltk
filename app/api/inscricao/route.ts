import { NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT!;

export async function POST(request: Request) {
    try {
        const body = await request.text();

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=UTF-8",
            },
            body,
        });

        const text = await response.text();

        return NextResponse.json({
            ok: response.ok && text === "OK",
        });
    } catch (error) {
        return NextResponse.json(
            {
                ok: false,
                error: String(error),
            },
            {
                status: 500,
            }
        );
    }
}