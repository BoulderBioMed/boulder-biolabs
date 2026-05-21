import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources & Insights",
  description: "Regulatory updates, validation guides, and microbiology testing insights from Boulder BioLabs.",
};

export default function ResourcesPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff" }}>Resources & Insights</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>Regulatory updates, validation guides, and microbiology testing insights. New posts published monthly.</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <p style={{ color: "#5A6478", fontStyle: "italic" }}>[Launch posts coming soon — full drafts at Boulder-BioLabs-Blog-Drafts.md. Six topics: ISO 11135:2024 changes, FDA endotoxin guidance, Clordisys CD residuals study, bioburden trending best practices, method suitability red flags, EO aeration optimization.]</p>
          <p>Until the launch posts are published, <Link href="/contact">request a quote</Link> or browse our <Link href="/faq">FAQ</Link>.</p>
        </div>
      </section>
    </>
  );
}
