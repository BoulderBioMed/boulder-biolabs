import Link from "next/link";
import { BoulderBioMedLogo } from "./Logo";

export function FamilyBar() {
  return (
    <div style={{ background: "#0B2545", color: "#cfd8e3", padding: "0.5rem 1.5rem", fontSize: "0.85rem" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <BoulderBioMedLogo variant="dark" height={24} />
          <span style={{ fontSize: "0.78rem", color: "#3DA9C7", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Family of Companies</span>
        </div>
        <nav style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://boulderiq.com/" target="_blank" rel="noopener" style={{ color: "#cfd8e3" }}>Boulder iQ</a>
          <a href="https://bouldersterilization.com/" target="_blank" rel="noopener" style={{ color: "#cfd8e3" }}>Boulder Sterilization</a>
          <a href="https://boulderraqa.com/" target="_blank" rel="noopener" style={{ color: "#cfd8e3" }}>Boulder RA/QA</a>
          <a href="https://boulderpackagetesting.com/" target="_blank" rel="noopener" style={{ color: "#cfd8e3" }}>Boulder Package Testing</a>
          <Link href="/" style={{ color: "#3DA9C7", fontWeight: 600 }}>Boulder BioLabs</Link>
        </nav>
      </div>
    </div>
  );
}
