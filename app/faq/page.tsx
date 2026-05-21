"use client";
import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/content/faqs";

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }) }} />

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff" }}>Frequently Asked Questions</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>Answers to common questions about Boulder BioLabs microbiology testing services. Have a question that isn&apos;t here? <Link href="/contact" style={{ color: "#fff", textDecoration: "underline" }}>Request a quote</Link> and we&apos;ll respond within one business day.</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {faqs.map((f, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E3E7EE", borderRadius: 8, marginBottom: "0.8rem", overflow: "hidden" }}>
              <div onClick={() => setOpen(open === i ? null : i)} style={{ padding: "1rem 1.4rem", cursor: "pointer", fontWeight: 700, color: "#0B2545", display: "flex", justifyContent: "space-between", alignItems: "center", userSelect: "none" }}>
                <span>{f.q}</span>
                <span style={{ fontSize: "1.5rem", color: "#3DA9C7", fontWeight: 400 }}>{open === i ? "−" : "+"}</span>
              </div>
              {open === i && (
                <div style={{ padding: "0 1.4rem 1.2rem 1.4rem", color: "#5A6478" }}>
                  <p>{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
