import type { Metadata } from "next";
import { people } from "@/content/people";
import { company } from "@/content/company";
import { breadcrumbSchema, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Boulder BioLabs",
  description: "Boulder BioLabs is the contract microbiology testing lab inside the Boulder BioMed family — co-located on a single Boulder, Colorado campus.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://boulderbiolabs.com/" },
  { name: "About", url: "https://boulderbiolabs.com/about" },
]);

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      {people.map((p) => (
        <script key={p.name} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema({ name: p.name, jobTitle: p.title, description: p.bio.join(" ") })) }} />
      ))}

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #2A8AA8 100%)", color: "#fff", padding: "3rem 1.5rem 3.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff" }}>About Boulder BioLabs</h1>
          <p style={{ color: "#e3eaf2", maxWidth: 800, marginTop: "1rem", fontSize: "1.05rem" }}>Boulder BioLabs is the contract microbiology testing lab inside the Boulder BioMed family of companies — a vertically integrated medical device services group co-located on a single Boulder, Colorado campus.</p>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2>Our Mission</h2>
          <p>Cut weeks out of every medical device validation by putting sterilization, microbiology testing, and regulatory support under one roof.</p>

          <h2>Quality System</h2>
          <p>Boulder BioLabs operates under the <strong>Boulder BioMed ISO 13485 quality management system</strong>. Microbiology testing protocols are aligned with ISO 11737-1, ISO 11737-2, USP &lt;71&gt;, USP &lt;85&gt;, and ISO 10993-7. Lab-level method accreditations (A2LA, ISO 17025) are in progress.</p>

          <h2>Leadership</h2>
          {people.map((p) => (
            <div key={p.name} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: "1.5rem", background: "#fff", padding: "1.5rem", borderRadius: 10, border: "1px solid #E3E7EE", marginBottom: "1.2rem", alignItems: "start" }}>
              <div style={{ width: 100, height: 100, background: "linear-gradient(135deg, #3DA9C7, #0B2545)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "1.8rem" }}>{p.initials}</div>
              <div>
                <h4 style={{ color: "#0B2545", marginTop: 0 }}>{p.name}</h4>
                <div style={{ color: "#2A8AA8", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.92rem" }}>{p.title}</div>
                {p.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.6rem" }}>
                  {p.creds.map((c) => (
                    <span key={c} style={{ background: "#F2F4F7", color: "#0B2545", padding: "0.2rem 0.6rem", borderRadius: 4, fontSize: "0.78rem", fontWeight: 600 }}>{c}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <h2>Location</h2>
          <p><strong>Boulder BioLabs:</strong> {company.legalAddress}<br /><strong>Boulder BioMed family operations:</strong> {company.bbmAddress}<br /><a href={company.phoneHref}>{company.phone}</a></p>
          <p>The Boulder BioMed family operates from two adjacent buildings on Western Avenue in Boulder — one campus, two buildings, five companies. Boulder BioLabs and Boulder Sterilization are co-located, with samples moving between the sterilizer and the microbiology lab without ever leaving the campus.</p>
        </div>
      </section>
    </>
  );
}
