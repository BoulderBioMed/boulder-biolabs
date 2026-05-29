import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const service = getServiceBySlug("method-suitability")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription };

const faqs = [
  { q: "Is method suitability really required?", a: "Yes. ISO 11737-2 and USP <71> both require a documented method suitability before sterility testing results are defensible. Skipping it is one of the most common 483 findings." },
  { q: "How often does method suitability need to be re-run?", a: "Any time the device material, geometry, or test method changes. A method suitability study is specific to the device family and method combination — it doesn't carry over." },
];

export default function MethodSuitabilityPage() {
  return (
    <ServicePageLayout service={service} faqs={faqs} image="/img/bbl-method-suitability.png" imageAlt="Method suitability bacteriostasis/fungistasis testing">
      <h2>What Is Method Suitability Testing?</h2>
      <p>A sterility test asks: <em>if there were a microbe on this device, would the test recover it?</em> If the device material is bacteriostatic or fungistatic, the answer might be &quot;no&quot; even when the device is contaminated. Method suitability validates that the test method recovers indicator organisms in the presence of the device material.</p>
      <p>We inoculate the device (or extract) with low levels of <em>S. aureus</em>, <em>P. aeruginosa</em>, <em>B. subtilis</em>, <em>C. albicans</em>, <em>A. brasiliensis</em>, and <em>C. sporogenes</em> per the USP &lt;71&gt; indicator panel and confirm recovery of each.</p>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>Why It Matters</h3>
        <p>Skipping method suitability is one of the most common 483 finding categories in medical device sterility programs. An inspector pulling a sterility record will ask for the method suitability that validates it. <strong>The cost of doing it right at the start is small. The cost of doing it later, under pressure, is not.</strong></p>
      </div>

      <h2>Our Process</h2>
      <ol>
        <li><strong>Method selection</strong> — direct inoculation vs. membrane filtration.</li>
        <li><strong>Inoculation</strong> at &lt;100 CFU of each USP &lt;71&gt; indicator.</li>
        <li><strong>Incubation and recovery</strong> per USP &lt;71&gt; / ISO 11737-2.</li>
        <li><strong>Modification if recovery fails</strong> — re-validated until recovery is demonstrated.</li>
        <li><strong>Reporting</strong> — referenced by every subsequent sterility test on that device family.</li>
      </ol>
    </ServicePageLayout>
  );
}
