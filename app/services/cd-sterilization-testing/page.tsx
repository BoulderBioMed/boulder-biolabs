import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const service = getServiceBySlug("cd-sterilization-testing")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription };

const faqs = [
  { q: "Why is CD residuals testing rare?", a: "Most contract labs aren't co-located with a CD sterilizer, so they have no reason to build the analytical capability. Boulder BioLabs offers it because Boulder Sterilization runs the only U.S. contract CD cycle under ISO 13485." },
  { q: "What CD residual limits apply?", a: "There's no ISO standard equivalent to ISO 10993-7 for CD. The Clordisys 2026 peer-reviewed study (J. Med. Biol. Eng.) proposed thresholds of <6.83 mg/device chlorite and <70.65 mg/device chlorate, which provides the regulatory framework Boulder BioLabs operates against." },
];

export default function CDResidualsPage() {
  return (
    <ServicePageLayout service={service} faqs={faqs} image="/img/bbl-eo-cd-residuals-gc.png" imageAlt="Chlorine dioxide residuals testing by ion chromatography">
      <h2>What Is CD Sterilization Residuals Testing?</h2>
      <p>Chlorine dioxide sterilization uses gaseous ClO₂ as the sterilant — effective against bacterial spores, fungi, and viruses, at low temperature and low humidity. CD leaves residuals: residual chlorine dioxide plus degradation products (chlorite, chlorate). CD residuals testing quantifies those residuals after aeration and compares them to validated limits.</p>
      <p>Our testing protocol combines an extraction step — headspace or exhaustive aqueous — with ion chromatography or spectrophotometric analysis for ClO₂ and its anion degradation products.</p>

      <h2>Why This Service Is Rare</h2>
      <p>EO sterilization has a 60-year head start on chlorine dioxide. Most contract labs built their residuals capability around EO and ISO 10993-7, and most don&apos;t have a CD sterilizer down the hall. Boulder BioLabs has it because Boulder Sterilization is the only U.S. contract sterilizer offering both EO and CD under ISO 13485.</p>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>Peer-Reviewed Toxicity Framework</h3>
        <p>In March 2026, Clordisys Solutions published &quot;Chlorine Dioxide Medical Device Sterilization: Residual Toxicity Testing&quot; in the <em>Journal of Medical and Biological Engineering</em>. The study proposed toxicity limits of &lt;6.83 mg/device chlorite and &lt;70.65 mg/device chlorate, providing the regulatory framework Boulder BioLabs operates against. <a href="https://link.springer.com/article/10.1007/s40846-025-00995-8" target="_blank" rel="noopener">Read the study →</a></p>
      </div>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>The Strongest Co-Location Story</h3>
        <p>Boulder Sterilization is <strong>the only U.S. contract sterilizer</strong> offering both EO and CD under ISO 13485. <strong>There is no other location in the country where you can sterilize with chlorine dioxide and run validated residuals testing on the same campus, on the same day, under one quality system.</strong></p>
      </div>
    </ServicePageLayout>
  );
}
