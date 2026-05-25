import Link from "next/link";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { family } from "@/content/company";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #061A33 100%)", color: "#fff", padding: "4.5rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(61,169,199,0.25) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <h1 style={{ color: "#fff", maxWidth: 820 }}>Microbiology Testing for Medical Devices — On the Same Campus as Your Sterilizer.</h1>
          <p style={{ fontSize: "1.2rem", color: "#cfd8e3", maxWidth: 760, marginBottom: "1.2rem", fontWeight: 500 }}>
            Sterility, bioburden, endotoxin, and EO/CD residuals testing — co-located with Boulder Sterilization. <strong>4-hour cycle release with 3M Attest rapid-readout BIs.</strong> No shipping. No chain-of-custody gap. Days off your validation timeline.
          </p>
          <p style={{ maxWidth: 720, color: "#cfd8e3", marginBottom: "1.8rem" }}>
            Boulder BioLabs is the contract microbiology lab inside the Boulder BioMed family of companies. Your sterilized devices move from the sterilizer to our test bench without ever leaving the campus.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link href="/integrated-testing" className="btn btn-secondary" style={{ color: "#fff", borderColor: "#fff" }}>See How Co-Location Works</Link>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Three Reasons Device Companies Choose Boulder BioLabs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "⚙", title: "Integrated Pipeline", body: <><strong>Sterilize and test without shipping.</strong> Boulder Sterilization is next door — the only U.S. contract sterilizer offering both EO and chlorine dioxide under one ISO 13485 system. Your samples walk to the lab.</> },
              { icon: "⏱", title: "4-Hour Cycle Release", body: <><strong>Faster than Nelson&apos;s 6-day RMM.</strong> Boulder BioLabs supports 4-hour cycle release using 3M Attest rapid-readout biological indicators. For BI-based release programs, devices clear sterility verification within hours of cycle end.</> },
              { icon: "🏛", title: "Single Source", body: <><strong>One QMS. One relationship. One roof.</strong> Boulder BioLabs operates under the Boulder BioMed ISO 13485 quality management system — same system as Boulder Sterilization and Boulder RA/QA.</> },
            ].map((p) => (
              <div key={p.title} style={{ background: "#fff", padding: "2rem 1.6rem", borderRadius: 10, border: "1px solid #E3E7EE", boxShadow: "0 2px 8px rgba(11,37,69,0.04)" }}>
                <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #3DA9C7, #0B2545)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.4rem", marginBottom: "1rem" }}>{p.icon}</div>
                <h3 style={{ marginTop: 0, color: "#0B2545" }}>{p.title}</h3>
                <p style={{ color: "#5A6478", marginBottom: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "#fff", padding: "3.5rem 1.5rem" }} id="services">
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Microbiology Testing Built for Medical Device Validation and Release</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Focused services done well — not a sprawling test catalog.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "1px solid #E3E7EE", display: "block", textDecoration: "none", color: "#0B2545" }}>
                <div style={{ fontSize: "0.78rem", color: "#2A8AA8", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.4rem" }}>{s.isoTag}</div>
                <h3 style={{ color: "#0B2545", fontSize: "1.1rem", marginTop: 0 }}>{s.shortTitle}</h3>
                <p style={{ color: "#5A6478", fontSize: "0.92rem", marginBottom: "0.6rem" }}>{s.metaDescription}</p>
                <span style={{ color: "#2A8AA8", fontWeight: 600, fontSize: "0.88rem" }}>Learn more →</span>
              </Link>
            ))}
            <Link href="/faq" style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "2px solid #3DA9C7", display: "block", textDecoration: "none", color: "#0B2545" }}>
              <div style={{ fontSize: "0.78rem", color: "#2A8AA8", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.4rem" }}>4-HOUR RELEASE</div>
              <h3 style={{ color: "#0B2545", fontSize: "1.1rem", marginTop: 0 }}>Rapid Cycle Release</h3>
              <p style={{ color: "#5A6478", fontSize: "0.92rem", marginBottom: "0.6rem" }}>3M Attest rapid-readout biological indicators — cycle efficacy confirmed in 4 hours. Faster than Nelson&apos;s 6-day RMM.</p>
              <span style={{ color: "#2A8AA8", fontWeight: 600, fontSize: "0.88rem" }}>Learn more →</span>
            </Link>
          </div>
          <div style={{ background: "#F2F4F7", border: "1px solid #E3E7EE", borderLeft: "4px solid #3DA9C7", padding: "1.2rem 1.5rem", borderRadius: 6, marginTop: "1.5rem", fontSize: "0.95rem" }}>
            <strong style={{ color: "#0B2545" }}>Need package and distribution testing too?</strong> Distribution testing (ASTM D4169, ISTA 3A, drop, vibration, compression, accelerated and real-time aging) is provided by our sister company, Boulder Package Testing — also part of the Boulder BioMed family. <a href="https://boulderpackagetesting.com/" target="_blank" rel="noopener">Visit Boulder Package Testing →</a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Industries We Support</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Specialized testing programs for device categories where the regulatory bar is highest.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "1px solid #E3E7EE", display: "block", textDecoration: "none", color: "#0B2545" }}>
                <h4 style={{ color: "#0B2545", marginTop: 0 }}>{i.shortName}</h4>
                <p style={{ color: "#5A6478", fontSize: "0.9rem", marginBottom: "0.4rem" }}>{i.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Family */}
      <section style={{ background: "#fff", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Our Family of Companies</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Boulder BioLabs is one of five companies in the Boulder BioMed family.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {family.map((f) => (
              <div key={f.name} style={{ padding: "1.5rem", borderRadius: 10, border: f.name.includes("BioLabs") ? "2px solid #3DA9C7" : "1px solid #E3E7EE", background: f.name.includes("BioLabs") ? "#f4fafc" : "#fff" }}>
                <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: 1, marginBottom: "0.9rem", paddingBottom: "0.8rem", borderBottom: "1px solid #E3E7EE", display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontWeight: 300, color: "#5A6478", fontSize: "1.15rem" }}>Boulder</span>
                  <span style={{ display: "inline-block", width: 1, height: "1.1rem", background: "#3DA9C7", alignSelf: "center", margin: "0 0.1rem" }} />
                  <span style={{ fontWeight: 700, color: "#0B2545", fontSize: "1.15rem" }}>{f.name.replace("Boulder ", "").replace(" (Hub)", "")}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#5A6478", marginBottom: "0.6rem" }}>{f.tagline}</p>
                <a href={f.url} target="_blank" rel="noopener" style={{ fontWeight: 600, fontSize: "0.88rem" }}>{f.url.replace("https://", "").replace("/", "")} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #2A8AA8 0%, #0B2545 100%)", color: "#fff", padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#fff", margin: "0 0 0.6rem" }}>Ready to get days back in your validation schedule?</h2>
        <p style={{ color: "#fff", opacity: 0.95, maxWidth: 640, margin: "0 auto 1.4rem" }}>Scope, price, and a realistic turnaround date back within one business day.</p>
        <Link href="/contact" className="btn btn-white">Request a Quote</Link>
      </section>
    </>
  );
}
