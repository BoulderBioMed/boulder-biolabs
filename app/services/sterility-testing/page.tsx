import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const service = getServiceBySlug("sterility-testing")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription };

const faqs = [
  { q: "Do you offer rapid sterility (4-hour cycle release)?", a: "Yes. Boulder BioLabs offers 4-hour cycle release using 3M Attest rapid-readout biological indicators. For BI-based release programs, this is faster than Nelson Labs' 6-day RMM or traditional 7-day BI incubation. For programs requiring USP <71> product sterility testing, traditional 14-day incubation applies." },
  { q: "Is method suitability required for sterility testing?", a: "Yes. Method suitability (B/F) is a regulatory prerequisite under ISO 11737-2 and USP <71>. We bundle it into every new sterility program by default." },
  { q: "What's the typical turnaround for USP <71> testing?", a: "Standard USP <71> sterility testing requires 14-day incubation. The clock starts the day samples are received — for Boulder Sterilization clients, that's the day the cycle ends." },
];

export default function SterilityTestingPage() {
  return (
    <ServicePageLayout service={service} faqs={faqs} image="/img/bbl-sterility-testing.png" imageAlt="Sterility testing in ISO Class 5 cleanroom">
      <h2>What Is Sterility Testing?</h2>
      <p>Sterility testing demonstrates that a sterilized medical device is free of viable microorganisms. The test is run by either direct inoculation or membrane filtration, depending on device geometry, and articles are incubated in fluid thioglycollate medium (FTM) and soybean-casein digest medium (SCDM) for 14 days.</p>
      <p>Sterility testing is paired with a <strong>method suitability study</strong> — without it, the sterility test itself is not regulatorily defensible.</p>

      <h2>When You Need Sterility Testing</h2>
      <ul>
        <li><strong>EO sterilization validation</strong> — half-cycle, full-cycle, PCD studies aligned with ISO 11135.</li>
        <li><strong>CD sterilization validation</strong> — sterility testing of post-sterilization samples.</li>
        <li><strong>Routine release testing</strong> — periodic sterility verification of production lots.</li>
        <li><strong>Method suitability pairing</strong> — bundled with every sterility program.</li>
        <li><strong>Audit response and remediation.</strong></li>
      </ul>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>Two Release Pathways: 4-Hour BI Release or USP &lt;71&gt; 14-Day Testing</h3>
        <p><strong>For BI-based release programs:</strong> Boulder BioLabs offers <strong>4-hour cycle release using 3M Attest rapid-readout biological indicators</strong>. Faster than Nelson Labs&apos; 6-day RMM, traditional 7-day BI incubation, and dramatically faster than 14-day USP &lt;71&gt; sterility testing.</p>
        <p><strong>For programs requiring USP &lt;71&gt; product sterility testing</strong> (class III implants, CSF-contacting devices, certain blood-contact applications): we run the traditional 14-day method, with the clock starting on Day 0 thanks to co-location.</p>
      </div>

      <h2>Our Process</h2>
      <ol>
        <li><strong>Sample receipt and accessioning.</strong> Chain of custody documented in our LIMS.</li>
        <li><strong>Cleanroom testing.</strong> Performed in ISO Class 5 environment.</li>
        <li><strong>Incubation</strong> per USP &lt;71&gt; / ISO 11737-2.</li>
        <li><strong>Result interpretation</strong> — positives sub-cultured to genus level.</li>
        <li><strong>Reporting</strong> issued under our ISO 13485 QMS.</li>
      </ol>
    </ServicePageLayout>
  );
}
