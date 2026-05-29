import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/content/articles";
import { pdfs } from "@/content/pdfs";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Resources & Insights | Boulder BioLabs",
  description: "Regulatory updates, validation guides, and microbiology testing insights from Boulder BioLabs. ISO 11135, FDA endotoxin guidance, CD residuals, bioburden trending, and more.",
  alternates: { canonical: "https://boulderbiolabs.com/resources" },
  openGraph: {
    title: "Resources & Insights | Boulder BioLabs",
    description: "Regulatory updates, validation guides, and microbiology testing insights from Boulder BioLabs.",
    url: "https://boulderbiolabs.com/resources",
    type: "website",
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long" });
}

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "https://boulderbiolabs.com/" },
              { name: "Resources", url: "https://boulderbiolabs.com/resources" },
            ]),
          ),
        }}
      />

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff" }}>Resources & Insights</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>Regulatory updates, validation guides, and microbiology testing insights for medical device QA and operations teams. New posts published monthly.</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {articles.map((article) => (
              <article key={article.slug} style={{ background: "#fff", border: "1px solid #e1e7ee", borderRadius: 8, padding: "1.5rem", display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "0.75rem", color: "#3DA9C7", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.6rem" }}>{formatDate(article.datePublished)} · Boulder BioLabs</p>
                <h2 style={{ color: "#0B2545", fontSize: "1.15rem", lineHeight: 1.3, marginBottom: "0.6rem" }}>
                  <Link href={`/resources/${article.slug}`} style={{ color: "#0B2545", textDecoration: "none" }}>{article.title}</Link>
                </h2>
                <p style={{ fontSize: "0.9rem", color: "#5A6478", marginBottom: "1rem", flex: 1, lineHeight: 1.55 }}>{article.description}</p>
                <Link href={`/resources/${article.slug}`} style={{ color: "#3DA9C7", fontWeight: 600, textDecoration: "none", fontSize: "0.9rem", marginTop: "auto" }}>Read article →</Link>
              </article>
            ))}
          </div>

          <div style={{ marginTop: "3.5rem" }}>
            <h2 style={{ color: "#0B2545", marginBottom: "0.4rem" }}>Free Guides &amp; Checklists</h2>
            <p style={{ color: "#5A6478", marginBottom: "1.5rem" }}>Downloadable PDFs for QA leads and manufacturing teams. Email-gated; we send the file and never spam you.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.2rem" }}>
              {pdfs.map((p) => (
                <article key={p.slug} style={{ background: "#fff", border: "1px solid #e1e7ee", borderLeft: "4px solid #3DA9C7", borderRadius: 8, padding: "1.4rem 1.4rem 1.2rem", display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "0.7rem", color: "#3DA9C7", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>Free PDF &middot; {p.pages} pages</p>
                  <h3 style={{ color: "#0B2545", fontSize: "1.05rem", lineHeight: 1.3, marginTop: 0, marginBottom: "0.4rem" }}>
                    <Link href={`/resources/${p.slug}`} style={{ color: "#0B2545", textDecoration: "none" }}>{p.title}</Link>
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#5A6478", marginBottom: "0.9rem", flex: 1, lineHeight: 1.5 }}>{p.description}</p>
                  <Link href={`/resources/${p.slug}`} style={{ color: "#3DA9C7", fontWeight: 600, textDecoration: "none", fontSize: "0.88rem", marginTop: "auto" }}>Get the PDF &rarr;</Link>
                </article>
              ))}
            </div>
          </div>

          <div style={{ background: "#F2F4F7", borderRadius: 8, padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
            <h2 style={{ color: "#0B2545", marginBottom: "0.6rem" }}>Need a Specific Validation Program?</h2>
            <p style={{ color: "#5A6478", maxWidth: 700, margin: "0 auto 1.2rem" }}>Our published guides cover the regulatory framework. For a validation program scoped to your device, sterilization method, and timeline, talk to our team directly.</p>
            <Link href="/contact" style={{ display: "inline-block", background: "#3DA9C7", color: "#fff", padding: "0.8rem 1.6rem", borderRadius: 4, textDecoration: "none", fontWeight: 600 }}>Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
