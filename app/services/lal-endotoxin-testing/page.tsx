import type { Metadata } from "next";
import { getServiceBySlug } from "@/content/services";
import { ServicePageLayout } from "@/components/ServicePageLayout";

const service = getServiceBySlug("lal-endotoxin-testing")!;
export const metadata: Metadata = { title: service.metaTitle, description: service.metaDescription };

const faqs = [
  { q: "What LAL methods do you support?", a: "Gel-clot, kinetic turbidimetric, and kinetic chromogenic. Method selection depends on device material, expected endotoxin range, and prior inhibition/enhancement data." },
  { q: "What endotoxin limit should my device meet?", a: "FDA guidance sets typical limits at 0.5 EU/mL or 20 EU/device for blood-contacting devices. CSF-contacting devices have a stricter 2.15 EU/device limit. Ophthalmic devices have their own thresholds." },
];

export default function LALPage() {
  return (
    <ServicePageLayout service={service} faqs={faqs}>
      <h2>What Is LAL / BET Testing?</h2>
      <p>Endotoxins are lipopolysaccharide (LPS) fragments from gram-negative bacterial outer membranes. They are pyrogenic and survive most sterilization processes. For devices contacting blood, CSF, lymphatic fluid, or other sensitive routes, sterility isn&apos;t enough — endotoxin must be quantified and held below a route-specific threshold (EU/device or EU/cm²).</p>
      <p>Boulder BioLabs supports all three major LAL variants: <strong>gel-clot</strong>, <strong>kinetic turbidimetric</strong>, and <strong>kinetic chromogenic</strong>. Each method is qualified against the specific device material with an inhibition/enhancement study (the LAL equivalent of method suitability).</p>

      <h2>Which Devices Require It?</h2>
      <ul>
        <li><strong>Cardiovascular devices</strong> — stents, catheters, guidewires, valves.</li>
        <li><strong>CSF-contacting devices</strong> — shunts, drains, intrathecal catheters.</li>
        <li><strong>Lymphatic-contacting devices.</strong></li>
        <li><strong>Implantable class II/III devices</strong> by contact route and duration.</li>
      </ul>

      <div style={{ background: "#F2F4F7", borderLeft: "4px solid #3DA9C7", padding: "1.5rem 1.8rem", borderRadius: 6, margin: "1.5rem 0" }}>
        <h3 style={{ color: "#0B2545", marginTop: 0 }}>Why Boulder BioLabs for BET</h3>
        <p>BET is usually the last test between a sterilized lot and a released product. Co-located with the sterilizer, that last step collapses from days to hours. We also run BET alongside sterility and EO residuals on the same sample sets — one sample drop, three validations.</p>
      </div>
    </ServicePageLayout>
  );
}
