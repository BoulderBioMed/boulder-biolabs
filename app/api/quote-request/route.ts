import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // TODO: wire to email service (Resend/Postmark) — see BLOCKERS.md
    console.log("Quote request received:", JSON.stringify(body, null, 2));
    return NextResponse.json({ ok: true, message: "Quote request received" });
  } catch (err) {
    console.error("Quote request error:", err);
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
