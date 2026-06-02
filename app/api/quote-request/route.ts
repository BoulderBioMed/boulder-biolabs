import { NextRequest, NextResponse } from "next/server";
import { sendFormEmail, FORM_RECIPIENT } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Keep logging the submission (nothing is lost if email transport is unset).
    console.log("Quote request received:", JSON.stringify(body, null, 2));

    const lines = Object.entries(body || {}).map(([k, v]) => `${k}: ${typeof v === "object" ? JSON.stringify(v) : String(v)}`);
    const replyTo = typeof body?.email === "string" ? body.email : undefined;
    const { sent } = await sendFormEmail({
      subject: `Boulder BioLabs — quote request${body?.company ? ` from ${body.company}` : ""}`,
      text: `New quote request for Boulder BioLabs (delivers to ${FORM_RECIPIENT}):\n\n${lines.join("\n")}`,
      replyTo,
    });

    return NextResponse.json({ ok: true, message: "Quote request received", emailed: sent });
  } catch (err) {
    console.error("Quote request error:", err);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
