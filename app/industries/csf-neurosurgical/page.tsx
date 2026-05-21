import type { Metadata } from "next";
import { getIndustryBySlug } from "@/content/industries";
import { IndustryPageLayout } from "@/components/IndustryPageLayout";

const ind = getIndustryBySlug("csf-neurosurgical")!;
export const metadata: Metadata = { title: `CSF & Neurosurgical Device Microbiology Testing | Boulder BioLabs`, description: `Sterility, BET (2.15 EU/device CSF limit), and residuals testing for shunts, drains, intrathecal catheters, neurosurgical implants.` };

export default function CSFPage() {
  return (
    <IndustryPageLayout industry={ind}>
      <h2>The CSF Endotoxin Limit</h2>
      <p>FDA&apos;s 2015 <em>Pyrogen and Endotoxins Testing</em> guidance sets the CSF-contacting endotoxin limit at <strong>2.15 EU/device</strong> — roughly an order of magnitude stricter than the 20 EU/device blood-contact limit. That tighter limit drives method selection (typically kinetic chromogenic LAL) and increases the importance of the inhibition/enhancement study.</p>
    </IndustryPageLayout>
  );
}
