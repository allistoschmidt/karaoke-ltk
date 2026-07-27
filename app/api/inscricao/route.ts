import { NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT;

export async function POST(request: Request) {
    try {
        if (!SCRIPT_URL) {
            return NextResponse.json(
                {
                    ok: false,
                    error: "A variável GOOGLE_SCRIPT não está configurada na Vercel.",
                },
                {
                    status: 500,
                }
            );
        }

        const body = await request.text();

        const response = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "text/plain;charset=UTF-8",
            },
            body,
            redirect: "follow",
        });

        const text = await response.text();

        console.log("STATUS:", response.status);
        console.log("RESPOSTA:", JSON.stringify(text));

        return NextResponse.json({
            ok: response.ok && text.trim() === "OK",
            status: response.status,
            resposta: text,
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                ok: false,
                error: error instanceof Error ? error.message : String(error),
            },
            {
                status: 500,
            }
        );
    }
}