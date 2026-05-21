import type { Metadata } from "next";
import Link from "next/link";
import { family } from "@/content/company";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Boulder BioMed Family of Companies",
  description: "Boulder iQ, Boulder Sterilization, Boulder RA/QA, Boulder Package Testing, and Boulder BioLabs — five companies, one campus, one QMS.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://boulderbiolabs.com/" },
  { name: "Family of Companies", url: "https://boulderbiolabs.com/family" },
]);

export default function FamilyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff" }}>Our Family of Companies</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>Boulder BioLabs is one of five companies in the Boulder BioMed family. Each operates independently — but for clients who use more than one, the integration cuts weeks out of a typical medical device timeline.</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {family.map((f) => (
            <div key={f.name} style={{ background: "#fff", padding: "2rem 1.6rem", borderRadius: 10, border: "1px solid #E3E7EE", boxShadow: "0 2px 8px rgba(11,37,69,0.04)" }}>
              <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: 1, marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px solid #E3E7EE", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                <span style={{ fontWeight: 300, color: "#5A6478", fontSize: "1.4rem" }}>Boulder</span>
                <span style={{ display: "inline-block", width: 1, height: "1.4rem", background: "#3DA9C7", alignSelf: "center" }} />
                <span style={{ fontWeight: 700, color: "#0B2545", fontSize: "1.4rem" }}>{f.name.replace("Boulder ", "").replace(" (Hub)", "")}</span>
              </div>
              <p style={{ color: "#5A6478", marginBottom: "1rem" }}>{f.tagline}</p>
              <a href={f.url} target="_blank" rel="noopener" style={{ color: "#2A8AA8", fontWeight: 600 }}>Visit site →</a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
