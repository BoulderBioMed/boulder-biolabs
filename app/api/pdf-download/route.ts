import { NextResponse } from "next/server";

// Accepts a POST from the gated PDF landing page form. Logs the lead and
// echoes back success so the page can reveal the download link.
//
// Persistence: today this only console.logs the payload (visible in Vercel
// runtime logs). Wire to a real CRM / email provider when one is selected -
// drop-in spot is below where `await persist(lead)` is commented out.

interface DownloadRequest {
  slug: string;
  file: string;
  name: string;
  email: string;
  company: string;
  reason?: string;
}

export async function POST(req: Request) {
  let body: DownloadRequest;
  try {
    body = (await req.json()) as DownloadRequest;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.email || !body.name || !body.company || !body.slug) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    source: "boulderbiolabs.com",
    type: "pdf_download",
    slug: body.slug,
    file: body.file,
    name: body.name.slice(0, 200),
    email: body.email.slice(0, 320),
    company: body.company.slice(0, 200),
    reason: (body.reason ?? "").slice(0, 1000),
  };

  // TODO: persist to a real store (Postmark/Resend + Airtable/Postgres/Salesforce).
  // For now, the runtime log is the system of record.
  console.log("[pdf_lead]", JSON.stringify(lead));

  return NextResponse.json({ ok: true, file: body.file });
}
