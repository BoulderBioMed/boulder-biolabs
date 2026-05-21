import Link from "next/link";
import { BoulderBioLabsLogo, BoulderBioMedLogo } from "./Logo";

export function Footer() {
  return (
    <footer style={{ background: "#0B2545", color: "#cfd8e3", padding: "3rem 1.5rem 1.5rem", fontSize: "0.9rem" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem", paddingBottom: "2rem", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: "1.5rem" }}>
          <div>
            <BoulderBioLabsLogo variant="dark" height={56} />
            <p style={{ marginTop: "0.6rem" }}>Contract microbiology testing for medical devices. Co-located with Boulder Sterilization.</p>
            <span style={{ display: "inline-block", background: "rgba(61,169,199,0.2)", color: "#3DA9C7", padding: "0.25rem 0.7rem", borderRadius: 4, fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.05em", marginTop: "0.5rem" }}>ISO 13485 QMS (VIA BBM)</span>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "0.8rem", fontSize: "1rem" }}>Services</h4>
            <Link href="/services/sterility-testing" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Sterility Testing</Link>
            <Link href="/services/bioburden-testing" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Bioburden Testing</Link>
            <Link href="/services/method-suitability" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Method Suitability</Link>
            <Link href="/services/lal-endotoxin-testing" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>LAL / Endotoxin</Link>
            <Link href="/services/eo-residuals-testing" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>EO Residuals</Link>
            <Link href="/services/cd-sterilization-testing" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>CD Residuals</Link>
            <Link href="/integrated-testing" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Integrated Pipeline</Link>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "0.8rem", fontSize: "1rem" }}>About</h4>
            <Link href="/about" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>About Boulder BioLabs</Link>
            <Link href="/faq" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>FAQ</Link>
            <Link href="/family" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Family of Companies</Link>
            <Link href="/resources" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Resources</Link>
            <Link href="/contact" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Contact</Link>
          </div>
          <div>
            <BoulderBioMedLogo variant="dark" height={38} />
            <div style={{ fontSize: "0.78rem", color: "#3DA9C7", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", margin: "0.6rem 0 0.8rem" }}>Family of Companies</div>
            <a href="https://boulderiq.com/" target="_blank" rel="noopener" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Boulder iQ →</a>
            <a href="https://bouldersterilization.com/" target="_blank" rel="noopener" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Boulder Sterilization →</a>
            <a href="https://boulderraqa.com/" target="_blank" rel="noopener" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Boulder RA/QA →</a>
            <a href="https://boulderpackagetesting.com/" target="_blank" rel="noopener" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Boulder Package Testing →</a>
            <a href="https://boulderbiomed.com/" target="_blank" rel="noopener" style={{ display: "block", color: "#cfd8e3", marginBottom: "0.4rem" }}>Boulder BioMed (Hub) →</a>
          </div>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "0.8rem", fontSize: "1rem" }}>Contact</h4>
            <p>5375 Western Avenue<br />Boulder, CO 80301<br /><a href="tel:3035311238" style={{ color: "#cfd8e3" }}>303-531-1238</a><br /><a href="mailto:info@boulderiq.com" style={{ color: "#cfd8e3" }}>info@boulderiq.com</a></p>
            <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", marginTop: "0.4rem" }}>BBM family operations: 5421 Western Ave.</p>
            <Link href="/contact" className="btn btn-primary" style={{ marginTop: "0.8rem", display: "inline-block" }}>Request a Quote</Link>
          </div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.05)", padding: "1rem 1.2rem", borderRadius: 6, fontSize: "0.82rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: "1.5rem" }}>
          Boulder BioLabs operates microbiology testing protocols aligned with ISO 11737-1/2, USP &lt;71&gt;, USP &lt;85&gt;, and ISO 10993-7 under the Boulder BioMed ISO 13485 quality management system. Lab-level method accreditations (A2LA, ISO 17025) are in progress.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", color: "rgba(255,255,255,0.6)", fontSize: "0.85rem" }}>
          <span>© 2026 Boulder BioLabs · Part of the Boulder BioMed family of companies.</span>
          <span>One roof. Every service. Faster to market.</span>
        </div>
      </div>
    </footer>
  );
}
