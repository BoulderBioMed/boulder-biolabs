"use client";

import { useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/components/Analytics";
import type { PdfLeadMagnet } from "@/content/pdfs";

// Shared landing-page UI for each gated PDF. Renders the marketing pitch and
// the email-capture form. On successful POST to /api/pdf-download, swaps the
// form for the actual download button.

export function PdfLandingPage({ pdf }: { pdf: PdfLeadMagnet }) {
  const [state, setState] = useState<"idle" | "submitting" | "unlocked" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    const formData = new FormData(e.currentTarget);
    const body = { slug: pdf.slug, file: pdf.file, ...Object.fromEntries(formData.entries()) };
    try {
      const res = await fetch("/api/pdf-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setState("unlocked");
      trackEvent("pdf_download_requested", { slug: pdf.slug, title: pdf.title });
    } catch (err) {
      console.error(err);
      setState("error");
    }
  }

  return (
    <>
      <nav style={{ background: "#F2F4F7", padding: "0.8rem 1.5rem", borderBottom: "1px solid #e1e7ee" }} aria-label="Breadcrumb">
        <div style={{ maxWidth: 1180, margin: "0 auto", fontSize: "0.875rem", color: "#5A6478" }}>
          <Link href="/" style={{ color: "#5A6478", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <Link href="/resources" style={{ color: "#5A6478", textDecoration: "none" }}>Resources</Link>
          <span style={{ margin: "0 0.5rem" }}>/</span>
          <span style={{ color: "#0B2545" }}>{pdf.title}</span>
        </div>
      </nav>

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#9DD6E8", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "0.6rem" }}>Free Guide &middot; {pdf.pages} pages</p>
          <h1 style={{ color: "#fff", maxWidth: 820 }}>{pdf.title}</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>{pdf.description}</p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: "2.5rem", alignItems: "start" }}>
          <div>
            <h2 style={{ color: "#0B2545", marginTop: 0 }}>What&apos;s inside</h2>
            <ul style={{ color: "#1f2937", lineHeight: 1.7, paddingLeft: "1.2rem" }}>
              {pdf.insideBullets.map((b) => (
                <li key={b} style={{ marginBottom: "0.4rem" }}>{b}</li>
              ))}
            </ul>
            <p style={{ color: "#5A6478", fontSize: "0.95rem", marginTop: "1.5rem" }}>Written for {pdf.audience}.</p>
          </div>

          <aside style={{ background: "#F2F4F7", border: "1px solid #e1e7ee", borderRadius: 10, padding: "1.8rem 1.6rem", position: "sticky", top: 90 }}>
            {state === "unlocked" ? (
              <>
                <h3 style={{ color: "#0B2545", marginTop: 0 }}>Your download is ready</h3>
                <p style={{ color: "#5A6478", fontSize: "0.9rem", lineHeight: 1.55 }}>Thanks. The PDF will open in a new tab. You will also hear from us once with anything else we publish that touches your program — never more than once a month.</p>
                <a
                  href={pdf.file}
                  target="_blank"
                  rel="noopener"
                  onClick={() => trackEvent("pdf_downloaded", { slug: pdf.slug, title: pdf.title })}
                  style={{ display: "inline-block", background: "#3DA9C7", color: "#fff", padding: "0.85rem 1.4rem", borderRadius: 6, textDecoration: "none", fontWeight: 600, fontSize: "0.95rem", marginTop: "0.6rem" }}
                >Download the PDF &rarr;</a>
              </>
            ) : (
              <>
                <h3 style={{ color: "#0B2545", marginTop: 0 }}>Get the PDF</h3>
                <p style={{ color: "#5A6478", fontSize: "0.9rem", lineHeight: 1.55, marginBottom: "1rem" }}>Tell us where to send a copy. We keep your details inside the Boulder BioMed family.</p>
                <form onSubmit={onSubmit} style={{ display: "grid", gap: "0.7rem" }}>
                  <FormField label="Name" name="name" required />
                  <FormField label="Work email" name="email" type="email" required />
                  <FormField label="Company" name="company" required />
                  <FormField label="What brought you here? (optional)" name="reason" textarea />
                  <button
                    type="submit"
                    disabled={state === "submitting"}
                    style={{ background: "#3DA9C7", color: "#fff", padding: "0.85rem 1.4rem", borderRadius: 6, border: "none", fontWeight: 600, fontSize: "0.95rem", cursor: state === "submitting" ? "not-allowed" : "pointer", opacity: state === "submitting" ? 0.7 : 1 }}
                  >
                    {state === "submitting" ? "Sending..." : "Email me the PDF"}
                  </button>
                  {state === "error" && (
                    <p style={{ color: "#dc2626", fontSize: "0.85rem", margin: 0 }}>
                      Something went wrong on our end. Try again, or email <a href="mailto:info@boulderiq.com" style={{ color: "#3DA9C7" }}>info@boulderiq.com</a>.
                    </p>
                  )}
                </form>
                <p style={{ color: "#9aa3b2", fontSize: "0.78rem", marginTop: "0.9rem", lineHeight: 1.45 }}>We only use your info to send the PDF and follow up if you ask. Never shared outside Boulder BioMed.</p>
              </>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}

function FormField({ label, name, type = "text", required = false, textarea = false }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  return (
    <label style={{ display: "block" }}>
      <div style={{ fontWeight: 600, color: "#0B2545", fontSize: "0.85rem", marginBottom: "0.25rem" }}>{label}{required && <span style={{ color: "#dc2626" }}> *</span>}</div>
      {textarea ? (
        <textarea name={name} required={required} rows={2} style={{ width: "100%", padding: "0.55rem 0.7rem", border: "1px solid #D1D5DB", borderRadius: 5, fontSize: "0.92rem", fontFamily: "inherit", boxSizing: "border-box" }} />
      ) : (
        <input type={type} name={name} required={required} style={{ width: "100%", padding: "0.55rem 0.7rem", border: "1px solid #D1D5DB", borderRadius: 5, fontSize: "0.92rem", boxSizing: "border-box" }} />
      )}
    </label>
  );
}
