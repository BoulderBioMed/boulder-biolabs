"use client";
import Link from "next/link";
import { useState } from "react";
import { BoulderBioLabsLogo } from "./Logo";
import { TrackedTel } from "./TrackedLinks";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #E3E7EE", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 4px rgba(11,37,69,0.04)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "1rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <BoulderBioLabsLogo variant="light" height={48} />
        </Link>

        {/* Desktop nav */}
        <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "1.25rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "#0B2545", fontWeight: 600, fontSize: "0.95rem" }}>Home</Link>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span style={{ color: "#0B2545", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", padding: "0.4rem 0" }}>Services ▾</span>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #E3E7EE", borderRadius: 8, padding: "0.5rem 0", minWidth: 280, boxShadow: "0 8px 24px rgba(11,37,69,0.12)", zIndex: 200 }}>
                <Link href="/services/sterility-testing" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>Sterility Testing</Link>
                <Link href="/services/bioburden-testing" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>Bioburden Testing</Link>
                <Link href="/services/method-suitability" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>Method Suitability (B/F)</Link>
                <Link href="/services/lal-endotoxin-testing" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>LAL / Endotoxin Testing</Link>
                <Link href="/services/eo-residuals-testing" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>EO Residuals Testing</Link>
                <Link href="/services/cd-sterilization-testing" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>CD Sterilization Residuals</Link>
              </div>
            )}
          </div>

          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <span style={{ color: "#0B2545", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer", padding: "0.4rem 0" }}>Industries ▾</span>
            {industriesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "#fff", border: "1px solid #E3E7EE", borderRadius: 8, padding: "0.5rem 0", minWidth: 240, boxShadow: "0 8px 24px rgba(11,37,69,0.12)", zIndex: 200 }}>
                <Link href="/industries/cardiovascular" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>Cardiovascular</Link>
                <Link href="/industries/csf-neurosurgical" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>CSF &amp; Neurosurgical</Link>
                <Link href="/industries/orthopedic-implants" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>Orthopedic Implants</Link>
                <Link href="/industries/ivd-diagnostics" style={{ display: "block", padding: "0.5rem 1rem", color: "#0B2545", fontSize: "0.9rem" }}>IVD &amp; Diagnostics</Link>
              </div>
            )}
          </div>

          <Link href="/integrated-testing" style={{ color: "#0B2545", fontWeight: 600, fontSize: "0.95rem" }}>Integrated Pipeline</Link>
          <Link href="/about" style={{ color: "#0B2545", fontWeight: 600, fontSize: "0.95rem" }}>About</Link>
          <Link href="/faq" style={{ color: "#0B2545", fontWeight: 600, fontSize: "0.95rem" }}>FAQ</Link>
          <TrackedTel number="3035311238" display="303-531-1238" location="header" style={{ fontWeight: 600, color: "#0B2545", fontSize: "0.9rem" }} />
          <Link href="/contact" className="btn btn-primary">Request a Quote</Link>
        </nav>
      </div>
    </header>
  );
}
