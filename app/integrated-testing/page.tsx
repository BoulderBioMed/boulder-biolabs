import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Integrated Sterilization + Testing Pipeline",
  description: "Sterilize and test on one campus. Boulder BioMed's integrated pipeline cuts weeks off medical device validation — EO, CD, sterility, residuals.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://boulderbiolabs.com/" },
  { name: "Integrated Pipeline", url: "https://boulderbiolabs.com/integrated-testing" },
]);

export default function IntegratedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #061A33 100%)", color: "#fff", padding: "4.5rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h1 style={{ color: "#fff", maxWidth: 820 }}>Sterilize. Test. Release. All on One Campus.</h1>
          <p style={{ fontSize: "1.2rem", color: "#cfd8e3", maxWidth: 760, marginBottom: "1.8rem", fontWeight: 500 }}>The Boulder BioMed integrated pipeline cuts weeks off medical device validation — without sacrificing data integrity or audit defensibility.</p>
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </div>
      </section>

      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <h2>The Problem</h2>
          <p>For most medical device manufacturers, the validation timeline looks like this. Devices are manufactured in one city, packaged in another, sent to a contract sterilizer in a third, and then shipped — often across the country — to a contract microbiology lab in a fourth. Each transition adds days of transit, paperwork, and chain-of-custody risk. New device introductions that should take a quarter end up taking three.</p>
          <p><strong>This is the problem Boulder BioMed was built to solve.</strong></p>

          <img src="/img/sterilization-to-test-transfer.png" alt="Sterilization-to-test transfer on the Boulder BioMed campus" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: 10, boxShadow: "0 6px 20px rgba(11,37,69,0.18)", margin: "1.5rem 0 0.5rem" }} />
          <h2>The Boulder BioMed Solution — Co-Location</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 0.1fr 1fr 0.1fr 1fr", gap: "1rem", margin: "2rem 0", alignItems: "stretch" }}>
            <div style={{ background: "#fff", border: "1px solid #E3E7EE", borderRadius: 10, padding: "1.5rem", textAlign: "center" }}>
              <div style={{ width: 36, height: 36, background: "#0B2545", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, margin: "0 auto 0.8rem" }}>1</div>
              <h4 style={{ color: "#0B2545", fontSize: "1rem" }}>Sterilize</h4>
              <p style={{ color: "#5A6478", fontSize: "0.9rem" }}>Boulder Sterilization — EO or chlorine dioxide cycles, ISO 13485 certified.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#3DA9C7", fontSize: "1.8rem", fontWeight: 800 }}>→</div>
            <div style={{ background: "#f4fafc", border: "2px solid #3DA9C7", borderRadius: 10, padding: "1.5rem", textAlign: "center" }}>
              <div style={{ width: 36, height: 36, background: "#3DA9C7", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, margin: "0 auto 0.8rem" }}>2</div>
              <h4 style={{ color: "#0B2545", fontSize: "1rem" }}>Test (you are here)</h4>
              <p style={{ color: "#5A6478", fontSize: "0.9rem" }}>Boulder BioLabs — sterility, bioburden, residuals, BET.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#3DA9C7", fontSize: "1.8rem", fontWeight: 800 }}>→</div>
            <div style={{ background: "#fff", border: "1px solid #E3E7EE", borderRadius: 10, padding: "1.5rem", textAlign: "center" }}>
              <div style={{ width: 36, height: 36, background: "#0B2545", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, margin: "0 auto 0.8rem" }}>3</div>
              <h4 style={{ color: "#0B2545", fontSize: "1rem" }}>Release</h4>
              <p style={{ color: "#5A6478", fontSize: "0.9rem" }}>Boulder RA/QA — documentation, audit support, 510(k).</p>
            </div>
          </div>
          <p style={{ textAlign: "center", color: "#5A6478", fontStyle: "italic" }}>Three steps. Three companies. One campus. One quality system.</p>

          <h2>The Integration Advantage</h2>
          {[
            ["No shipping.", "Sterilized devices walk from the sterilizer to the lab. No FedEx, no transit risk."],
            ["No chain-of-custody gap.", "Internal custody transfer documented in a single LIMS."],
            ["Faster cycle iteration.", "Validation iterations that used to take two-week round trips finish in days."],
            ["Single QMS.", "One ISO 13485 system across Boulder Sterilization, Boulder BioLabs, and Boulder RA/QA."],
            ["Single point of contact.", "One project manager runs the full workflow."],
          ].map(([title, body]) => (
            <div key={title} style={{ background: "#fff", padding: "0.8rem 1rem 0.8rem 2.6rem", border: "1px solid #E3E7EE", borderRadius: 8, marginBottom: "0.6rem", position: "relative" }}>
              <span style={{ position: "absolute", left: "0.9rem", top: "0.8rem", width: "1.4rem", height: "1.4rem", background: "#3DA9C7", color: "#fff", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "0.85rem" }}>✓</span>
              <strong style={{ color: "#0B2545" }}>{title}</strong> {body}
            </div>
          ))}

          <h2>What Customers Say</h2>
          <p style={{ color: "#5A6478", fontStyle: "italic" }}>[Draft testimonials — customer attribution to be added.]</p>
          {[
            ["Boulder BioLabs was a laboratory customer first — they know our pain points and they've fixed them. The team gets what it's like on the manufacturer side because they've lived it.", "QA Director, Class III Implantable Device Manufacturer"],
            ["We've used five of the big national labs over the years. They are impersonal and they don't give the service Boulder BioLabs does. The difference isn't subtle — it's the difference between a lab you call and a lab that calls you.", "VP Operations, Cardiovascular Device Manufacturer"],
            ["We're a Boulder Sterilization client and having the co-located microbiology lab saves us more in shipping than the actual cost of the residuals testing. Net cost of EO residuals testing here is negative for us, before we even count the time savings.", "Director of Sterilization Operations, Orthopedic Implant Company"],
          ].map(([quote, who]) => (
            <blockquote key={who} style={{ background: "#fff", borderLeft: "4px solid #3DA9C7", padding: "1.2rem 1.5rem", margin: "1rem 0", borderRadius: "0 6px 6px 0", fontStyle: "italic" }}>
              &ldquo;{quote}&rdquo;
              <cite style={{ display: "block", marginTop: "0.6rem", fontStyle: "normal", fontWeight: 600, color: "#5A6478", fontSize: "0.9rem" }}>— [{who}]</cite>
            </blockquote>
          ))}
        </div>
      </section>

      <section style={{ background: "linear-gradient(135deg, #2A8AA8 0%, #0B2545 100%)", color: "#fff", padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#fff", margin: "0 0 0.6rem" }}>See if the Integrated Pipeline Fits Your Program.</h2>
        <p style={{ color: "#fff", opacity: 0.95, maxWidth: 640, margin: "0 auto 1.4rem" }}>One person in charge of the full workflow across whichever Boulder BioMed spokes you need.</p>
        <Link href="/contact" className="btn btn-white">Request a Quote</Link>
      </section>
    </>
  );
}
