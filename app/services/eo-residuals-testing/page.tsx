import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const service = getServiceBySlug("eo-residuals-testing")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription };

const faqs = [
  { q: "When is EO residuals testing required?", a: "Initial EO validation, annual revalidation, design changes, sterilization cycle changes, new materials, and post-recall remediation. ISO 11135 §12 specifies the annual revalidation requirement." },
  { q: "What's the difference between headspace and exhaustive extraction?", a: "Headspace approximates the gas a patient would be exposed to under simulated use. Exhaustive recovers the total residual load. ISO 10993-7 Section B defines both — we run whichever is appropriate to your patient contact category." },
];

export default function EOResidualsPage() {
  return (
    <ServicePageLayout service={service} faqs={faqs}>
      <h2>What Is EO Residuals Testing?</h2>
      <p>Ethylene oxide kills microorganisms by alkylating DNA but is toxic at residual levels, and reacts with chlorides to form ECH or with water to form EG. ISO 10993-7 sets maximum residuals for EO, ECH, and EG based on patient contact duration (limited, prolonged, permanent) and route (skin, mucosa, blood, implant).</p>
      <p>We run both major extraction strategies: <strong>headspace</strong> (approximates patient gas exposure) and <strong>exhaustive</strong> (total residual load). Analysis is by gas chromatography with flame ionization detection (GC-FID).</p>

      <h2>When Required</h2>
      <ul>
        <li><strong>Initial EO sterilization validation</strong> — aligned with ISO 11135.</li>
        <li><strong>Annual revalidation</strong> per ISO 11135 §12.</li>
        <li><strong>Design changes</strong> — materials, packaging, density, geometry.</li>
        <li><strong>Cycle changes</strong> — aeration time, temperature, EO concentration.</li>
        <li><strong>New materials</strong> — polymers, adhesives, coatings.</li>
        <li><strong>Post-recall remediation.</strong></li>
      </ul>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>The Strongest Integration Story</h3>
        <p>The EO cycle has a back-end called <strong>aeration</strong>, where residual EO out-gasses. National labs typically don&apos;t see the device until 2–5 business days after aeration ends — that shipping window adds extra aeration time onto the sample. When EO residuals testing happens on the same campus as the EO sterilizer, the sample is pulled at the moment aeration ends. <strong>Cycles tighten. Throughput climbs. Validations finish in days that used to take weeks.</strong></p>
      </div>
    </ServicePageLayout>
  );
}
