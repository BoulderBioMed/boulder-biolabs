import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services } from "@/content/services";
import { industries } from "@/content/industries";
import { family } from "@/content/company";
import { testimonials } from "@/content/testimonials";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Microbiology Testing for Contract Sterilization Providers",
  description:
    "Boulder BioLabs is the microbiology testing partner built for contract sterilization providers — sterility, bioburden, endotoxin, and EO/CD residuals testing designed to protect the release dates you've promised your customers.",
};

const breadcrumb = breadcrumbSchema([
  { name: "Home", url: "https://boulderbiolabs.com/" },
  { name: "Contract Sterilization Providers", url: "https://boulderbiolabs.com/sterilization-partners" },
]);

const serviceCopy: Record<string, string> = {
  "sterility-testing":
    "The result your customer's regulatory file depends on — run once, run right, documented for audit from the start, not cleaned up after the fact.",
};

export default function SterilizationPartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0B2545 0%, #061A33 100%)", color: "#fff", padding: "4.5rem 1.5rem 5rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, background: "radial-gradient(circle, rgba(41,104,160,0.25) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ fontSize: "0.8rem", color: "#75D69C", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.8rem" }}>
            For Contract Sterilization Providers
          </div>
          <h1 style={{ color: "#fff", maxWidth: 820 }}>Testing Delays Shouldn&rsquo;t Be the Reason Your Customers Doubt Your Timeline.</h1>
          <p style={{ fontSize: "1.2rem", color: "#cfd8e3", maxWidth: 760, marginBottom: "1.2rem", fontWeight: 500 }}>
            Boulder BioLabs is the microbiology testing partner built for contract sterilization providers — sterility, bioburden, endotoxin, and EO/CD residuals testing designed to get it right the first time, turn around fast, and keep the release dates you&rsquo;ve promised your customers intact.
          </p>
          <p style={{ maxWidth: 720, color: "#cfd8e3", marginBottom: "1.8rem" }}>
            Boulder BioLabs is the contract microbiology lab inside the Boulder BioMed family of companies. Samples move from sterilizer to test bench without ever leaving the campus.
          </p>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
            <Link href="/integrated-testing" className="btn btn-secondary" style={{ color: "#fff", borderColor: "#fff" }}>See How Co-Location Works</Link>
          </div>
        </div>
      </section>

      {/* Hero image banner */}
      <section style={{ background: "#061A33", padding: "0 1.5rem", marginTop: "-2px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <Image src="/img/bbl-hero-lab-cleanroom.png" alt="Boulder BioLabs cleanroom on the Boulder Sterilization campus" width={2100} height={900} sizes="(max-width: 1180px) 100vw, 1180px" priority style={{ width: "100%", height: "auto", objectFit: "cover", display: "block", marginTop: "-3rem", borderRadius: 12, boxShadow: "0 16px 40px rgba(0,0,0,0.35)" }} />
        </div>
      </section>

      {/* Three Pillars */}
      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Why Contract Sterilization Providers Send Us Their Testing</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "⚙", title: "We Think Like a Sterilizer, Because We Started Inside One", body: <>Boulder BioLabs was built inside a working sterilization operation — Boulder Sterilization, next door, running EO and chlorine dioxide under one ISO 13485 quality system. We designed our testing workflow around cycle time, not lab convenience, and we bring that same discipline to every sterilization partner we work with, whether or not you&rsquo;re on our campus.</> },
              { icon: "⏱", title: "4-Hour Cycle Release", body: <>When your customer is watching the calendar, a standard 6-day BI read is a hard thing to explain. Our rapid-readout biological indicators clear most cycles same-day — so the bottleneck moves off your desk, not onto it.</> },
              { icon: "🏛", title: "One Lab, One Point of Contact", body: <>Every result comes from a lab team you can call directly — not a portal, not a rotating account rep. One QMS, one point of contact. When your customer needs an answer today, you need someone who can actually give you one today.</> },
            ].map((p) => (
              <div key={p.title} style={{ background: "#fff", padding: "2rem 1.6rem", borderRadius: 10, border: "1px solid #E3E7EE", boxShadow: "0 2px 8px rgba(11,37,69,0.04)" }}>
                <div style={{ width: 48, height: 48, background: "linear-gradient(135deg, #2968A0, #0B2545)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.4rem", marginBottom: "1rem" }}>{p.icon}</div>
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
            <h2>Microbiology Testing Built to Protect Your Turnaround Promises</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Seven testing services, each built around the two things that hurt a sterilization partner most: a retest that wasn&rsquo;t your fault, and a result that comes back too late to matter.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "1px solid #E3E7EE", display: "block", textDecoration: "none", color: "#0B2545" }}>
                <div style={{ fontSize: "0.78rem", color: "#1F5180", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.4rem" }}>{s.isoTag}</div>
                <h3 style={{ color: "#0B2545", fontSize: "1.1rem", marginTop: 0 }}>{s.shortTitle}</h3>
                <p style={{ color: "#5A6478", fontSize: "0.92rem", marginBottom: "0.6rem" }}>{serviceCopy[s.slug] ?? s.metaDescription}</p>
                <span style={{ color: "#1F5180", fontWeight: 600, fontSize: "0.88rem" }}>Learn more →</span>
              </Link>
            ))}
            <Link href="/faq" style={{ background: "#fff", padding: "1.5rem", borderRadius: 10, border: "2px solid #2968A0", display: "block", textDecoration: "none", color: "#0B2545" }}>
              <div style={{ fontSize: "0.78rem", color: "#1F5180", fontWeight: 700, letterSpacing: "0.05em", marginBottom: "0.4rem" }}>4-HOUR RELEASE</div>
              <h3 style={{ color: "#0B2545", fontSize: "1.1rem", marginTop: 0 }}>Rapid Cycle Release</h3>
              <p style={{ color: "#5A6478", fontSize: "0.92rem", marginBottom: "0.6rem" }}>The difference between telling a customer &ldquo;it shipped today&rdquo; and telling them &ldquo;it ships in six days.&rdquo;</p>
              <span style={{ color: "#1F5180", fontWeight: 600, fontSize: "0.88rem" }}>Learn more →</span>
            </Link>
          </div>
          <div style={{ background: "#F2F4F7", border: "1px solid #E3E7EE", borderLeft: "4px solid #2968A0", padding: "1.2rem 1.5rem", borderRadius: 6, marginTop: "1.5rem", fontSize: "0.95rem" }}>
            <strong style={{ color: "#0B2545" }}>Need package and distribution testing too?</strong> Distribution testing (ASTM D4169, ISTA 3A, drop, vibration, compression, accelerated and real-time aging) is provided by our sister company, Boulder Package Testing — also part of the Boulder BioMed family. <a href="https://boulderpackagetest.com/" target="_blank" rel="noopener">Visit Boulder Package Testing →</a>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Industries We Support</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Across the device categories your customers bring you:</p>
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

      {/* Proof */}
      <section style={{ background: "#fff", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>What Our Clients Say</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Anonymized feedback from medical device companies we support. Names changed to protect commercial confidentiality.</p>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>These are the standards your customers already judge you by — accuracy, speed, and someone who picks up the phone.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.4rem" }}>
            {testimonials.map((t, i) => (
              <figure key={i} style={{ margin: 0, background: "#F2F4F7", padding: "1.8rem 1.6rem", borderRadius: 10, border: "1px solid #E3E7EE", display: "flex", flexDirection: "column" }}>
                <div style={{ color: "#2968A0", fontSize: "2rem", lineHeight: 1, marginBottom: "0.4rem", fontFamily: "Georgia, serif" }}>&ldquo;</div>
                <blockquote style={{ margin: 0, color: "#1f2937", fontStyle: "italic", lineHeight: 1.55, fontSize: "0.95rem", flex: 1 }}>{t.quote}</blockquote>
                <figcaption style={{ marginTop: "1.1rem", paddingTop: "0.9rem", borderTop: "1px solid #E3E7EE", color: "#0B2545", fontWeight: 600, fontSize: "0.92rem" }}>
                  {t.name} <span style={{ color: "#5A6478", fontWeight: 400 }}>&middot; {t.location}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Family */}
      <section style={{ background: "#F8FAFC", padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 2.5rem" }}>
            <h2>Our Family of Companies</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>
              We&rsquo;re part of the Boulder BioMed family, working alongside Boulder Sterilization (EO/CD), Boulder RA/QA, and Boulder iQ — which means the standards we hold ourselves to were shaped by a working sterilization floor, not written in a vacuum. If you ever need overflow testing capacity, a second-source lab, or backup coverage during an audit, we already speak your language.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {family.map((f) => (
              <div key={f.name} style={{ padding: "1.5rem", borderRadius: 10, border: f.name.includes("BioLabs") ? "2px solid #2968A0" : "1px solid #E3E7EE", background: f.name.includes("BioLabs") ? "#f4fafc" : "#fff" }}>
                <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", lineHeight: 1, marginBottom: "0.9rem", paddingBottom: "0.8rem", borderBottom: "1px solid #E3E7EE", display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                  <span style={{ fontWeight: 300, color: "#5A6478", fontSize: "1.15rem" }}>Boulder</span>
                  <span style={{ display: "inline-block", width: 1, height: "1.1rem", background: "#2968A0", alignSelf: "center", margin: "0 0.1rem" }} />
                  <span style={{ fontWeight: 700, color: "#0B2545", fontSize: "1.15rem" }}>{f.name.replace("Boulder ", "").replace(" (Hub)", "")}</span>
                </div>
                <p style={{ fontSize: "0.88rem", color: "#5A6478", marginBottom: "0.6rem" }}>{f.tagline}</p>
                <a href={f.url} target="_blank" rel="noopener" style={{ fontWeight: 600, fontSize: "0.88rem" }}>{f.url.replace("https://", "").replace("/", "")} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Documentation */}
      <section style={{ padding: "3.5rem 1.5rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 2.5rem" }}>
            <h2>Documentation Built for Your Regulatory File</h2>
            <p style={{ color: "#5A6478", fontSize: "1.1rem" }}>Documentation your customers can drop straight into their regulatory file — no reformatting, no gaps, no follow-up calls to fill in what&rsquo;s missing.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
            {[
              "ISO 13485 quality management system (via Boulder BioMed)",
              "Protocols aligned with ISO 11737-1 (bioburden)",
              "Protocols aligned with ISO 11737-2 (sterility)",
              "Protocols aligned with USP <71> (sterility)",
              "Protocols aligned with USP <85> (bacterial endotoxin / LAL)",
              "Protocols aligned with ISO 10993-7 (EO residuals)",
            ].map((item) => (
              <div key={item} style={{ background: "#fff", padding: "1.2rem 1.4rem", borderRadius: 10, border: "1px solid #E3E7EE", display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
                <span style={{ color: "#2968A0", fontWeight: 800, fontSize: "1.05rem", lineHeight: 1.4 }}>✓</span>
                <span style={{ color: "#0B2545", fontSize: "0.95rem", fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
          <p style={{ color: "#5A6478", fontSize: "0.88rem", marginTop: "1.2rem" }}>Lab-level method accreditations (A2LA, ISO 17025) are in progress.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #1F5180 0%, #0B2545 100%)", color: "#fff", padding: "3rem 1.5rem", textAlign: "center" }}>
        <h2 style={{ color: "#fff", margin: "0 0 0.6rem" }}>Ready to give your customers one less delay to worry about?</h2>
        <p style={{ color: "#fff", opacity: 0.95, maxWidth: 640, margin: "0 auto 1.4rem" }}>Scope, price, and a realistic turnaround date back within one business day.</p>
        <Link href="/contact" className="btn btn-white">Talk to Our Lab Team</Link>
      </section>
    </>
  );
}
