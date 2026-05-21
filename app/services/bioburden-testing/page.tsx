import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const service = getServiceBySlug("bioburden-testing")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription };

const faqs = [
  { q: "How often should bioburden be monitored?", a: "ISO 11135 calls for quarterly bioburden monitoring on EO sterilization programs. Other modalities may require different cadences based on validation protocol." },
  { q: "What's a recovery efficiency factor and why does it matter?", a: "Recovery efficiency (RE) is the validated fraction of bioburden the extraction method captures. The RE factor adjusts raw counts to estimate true bioburden. Without an RE study, bioburden numbers are indefensible." },
];

export default function BioburdenTestingPage() {
  return (
    <ServicePageLayout service={service} faqs={faqs}>
      <h2>What Is Bioburden Testing?</h2>
      <p>Bioburden testing recovers viable microorganisms from a device using a validated extraction technique — rinse, sonication, or destructive methods — and enumerates by membrane filtration or pour-plate. Results are reported in CFU per device with aerobic/anaerobic/fungal breakouts, adjusted by a validated recovery efficiency (RE) factor.</p>
      <p>For sterilization programs, bioburden is the <strong>input</strong> to the validation math — EO half-cycle calculations, radiation dose-setting (VDmax, Method 1/2), and CD cycle parameters all start from a bioburden number.</p>

      <h2>When You Need It</h2>
      <ul>
        <li><strong>EO sterilization programs</strong> — initial validation, quarterly monitoring, routine release.</li>
        <li><strong>CD sterilization programs</strong> — bioburden establishes the load entering CD cycles.</li>
        <li><strong>Radiation sterilization</strong> — bioburden data for VDmax 25, Method 1, dose-audit programs.</li>
        <li><strong>Method validation and recovery efficiency studies.</strong></li>
        <li><strong>New product introduction.</strong></li>
      </ul>

      <h2>Our Process</h2>
      <ol>
        <li><strong>Sample receipt</strong> per the validated sampling plan.</li>
        <li><strong>Extraction</strong> — rinse, sonication, stomacher, or destructive.</li>
        <li><strong>Recovery and enumeration</strong> — membrane filtration or pour-plate.</li>
        <li><strong>Incubation</strong> — aerobic, anaerobic, and fungal per ISO 11737-1 protocols.</li>
        <li><strong>RE factor application.</strong></li>
        <li><strong>Reporting</strong> with raw counts, RE, adjusted estimate, and genus-level ID on request.</li>
      </ol>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>Why Boulder BioLabs for Bioburden</h3>
        <p>Co-locating bioburden testing with Boulder Sterilization tightens the feedback loop. When bioburden trends up, sterilization cycle parameters can be tuned before the next production lot is loaded.</p>
      </div>
    </ServicePageLayout>
  );
}
